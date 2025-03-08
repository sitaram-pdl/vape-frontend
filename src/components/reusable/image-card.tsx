'use client';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/utils/cn';

type ImageCardProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  priority?: boolean;
};

function ImageCard({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: ImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'relative translate-y-3 bg-primary w-full',
        containerClassName,
      )}
      style={{
        aspectRatio: `${width}/${height}`,
        maxWidth: width,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          'object-cover transition-all duration-300 ease-in-out',
          !isHovered ? 'translate-x-3 -translate-y-3' : '',
          className,
        )}
      />
    </div>
  );
}

export default ImageCard;
