import { useEffect, useState } from 'react';

export function SuccessPage() {
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // Get session_id from URL
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    
    if (sessionId) {
      // Verify payment and add to Mailchimp
      fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: sessionId }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Payment verified and user added to Mailchimp:', data);
          setVerificationStatus('success');
        } else {
          console.error('Payment verification failed:', data);
          setVerificationStatus('error');
        }
      })
      .catch(error => {
        console.error('Error verifying payment:', error);
        setVerificationStatus('error');
      });
    } else {
      setVerificationStatus('error');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Modern Card Container */}
        <div className="backdrop-blur-sm bg-white/80 rounded-3xl shadow-[0_20px_50px_rgba(120,43,201,0.1)] border border-purple-100/50 p-8 sm:p-12">
          
          {/* Animated Success Icon */}
          <div className="relative mx-auto mb-8">
            <div className="mx-auto flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/25 animate-pulse">
              <svg
                className="h-10 w-10 sm:h-12 sm:w-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Celebration sparkles */}
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-1 -left-2 h-3 w-3 bg-pink-400 rounded-full animate-bounce delay-300"></div>
          </div>

          {/* Success Message */}
          <div className="space-y-4 mb-8">
            <h1 className="font-['Nunito:Bold',_sans-serif] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="bg-gradient-to-r from-[#a047ff] to-[#782acb] bg-clip-text text-transparent">
                Thank You!
              </span>
            </h1>
            <h2 className="font-['Nunito:SemiBold',_sans-serif] font-semibold text-xl sm:text-2xl text-[#2d1b69] mb-2">
              Payment Successful
            </h2>
            <p className="font-['Nunito:Regular',_sans-serif] text-base sm:text-lg text-[#5b6178] leading-relaxed max-w-md mx-auto">
              Your support is helping transform STEM education and empowering the next generation of innovators.
            </p>
          </div>

          {/* Impact Message */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-8 border border-purple-100/50">
            <h3 className="font-['Nunito:SemiBold',_sans-serif] font-semibold text-lg text-[#2d1b69] mb-3">
              What happens next?
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-[#5b6178]">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 bg-[#a047ff] rounded-full flex-shrink-0"></div>
                <span>Confirmation email sent to your inbox</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 bg-[#a047ff] rounded-full flex-shrink-0"></div>
                <span>Your contribution directly impacts students' lives</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 bg-[#a047ff] rounded-full flex-shrink-0"></div>
                <span>Join our community for updates and progress</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              window.history.pushState(null, '', '/');
              window.location.reload();
            }}
            className="w-full bg-gradient-to-r from-[#782acb] to-[#9333ea] hover:from-[#6b25b5] hover:to-[#7c3aed] text-white font-['Nunito:Bold',_sans-serif] font-bold text-lg py-4 px-8 rounded-xl shadow-[0_10px_30px_rgba(120,43,201,0.3)] hover:shadow-[0_15px_40px_rgba(120,43,201,0.4)] hover:scale-105 transition-all duration-300 group"
          >
            <span className="flex items-center justify-center gap-2">
              <span>Continue Your Journey</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>

          {/* Subtle branding */}
          <p className="mt-6 text-xs text-[#8c92ab] font-['Nunito:Regular',_sans-serif]">
            Powered by YGBVerse • Transforming STEM Education
          </p>
        </div>
      </div>
    </div>
  );
}