import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import originalLogo from '@/assets/leadprime-logo-new.png';

const LogoWithBackgroundRemoval = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        
        // Fetch the original logo
        const response = await fetch(originalLogo);
        const blob = await response.blob();
        
        // Load the image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
        
        setIsProcessing(false);
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Failed to process logo');
        setIsProcessing(false);
      }
    };

    processLogo();
    
    // Cleanup URL on unmount
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  if (isProcessing) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded animate-pulse"></div>
        <span className="text-xl font-bold">LeadPrime</span>
      </div>
    );
  }

  if (error || !processedLogoUrl) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-2xl text-primary">🌉</span>
        <span className="text-xl font-bold">LeadPrime</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <img 
        src={processedLogoUrl} 
        alt="LeadPrime Logo" 
        className="h-14 w-auto transform hover:scale-105 transition-transform duration-300"
        style={{ transformStyle: 'preserve-3d', transform: 'perspective(500px) rotateY(5deg)' }}
      />
    </div>
  );
};

export default LogoWithBackgroundRemoval;