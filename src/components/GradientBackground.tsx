import '../styles/gradients.css';

interface GradientBackgroundProps {
  currentPage?: 'home' | 'about' | 'explore';
}

export function GradientBackground({ currentPage = 'home' }: GradientBackgroundProps) {
  const isExplorePage = currentPage === 'explore';
  
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: isExplorePage ? 20 : -1 }}
    >
      {/* CSS-based floating gradients */}
      <div className="floating-gradient green slow float-up"></div>
      <div className="floating-gradient purple fast float-down"></div>
    </div>
  );
}