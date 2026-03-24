import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message: string;
  phoneNumber?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  phoneNumber = "2250160125373",
  className = "w-full bg-[#19a89e] hover:bg-[#16968c] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2",
  children
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'Nous Contacter'}
    </button>
  );
};

export default WhatsAppButton;
