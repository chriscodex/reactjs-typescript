'use client';
import RandomFox from '@/components/RandomFox';
import { ReactElement, useState } from 'react';

const randomNumber = (): number => {
  return Math.floor(Math.random() * 123) + 1;
};

export default function Home(): ReactElement {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
    `https://randomfox.ca/images/${randomNumber()}.jpg`,
  ]);

  return (
    <main>
      <p>Hello</p>
      {images.map((image, index) => {
        return (
          <div key={index}  className="mb-4">
            <RandomFox image={image} />
          </div>
        );
      })}
    </main>
  );
}
