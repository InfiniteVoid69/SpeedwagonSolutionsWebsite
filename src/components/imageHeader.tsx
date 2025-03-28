import React from 'react';

interface ImageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-blue-950/60 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;