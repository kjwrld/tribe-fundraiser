import { useState } from 'react';

interface DonationCheckoutProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  isRecurring?: boolean;
  description?: string;
}

export function DonationCheckout({ 
  amount, 
  onSuccess, 
  onError, 
  isRecurring = false,
  description = 'YGBVerse Donation'
}: DonationCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDonation = async () => {
    setIsLoading(true);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || window.location.origin;
      const response = await fetch(`${apiUrl}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description,
          isRecurring
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
      
      onSuccess?.();
    } catch (error) {
      console.error('Donation error:', error);
      onError?.(error instanceof Error ? error.message : 'Failed to process donation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDonation, isLoading };
}