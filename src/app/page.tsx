'use client';
import RandomFox from '@/components/RandomFox';
import type { MouseEventHandler } from 'react';
import { useState } from 'react';

const randomNumber = (): number => {
  return Math.floor(Math.random() * 123) + 1;
};

function generarIdUnico(): string {
  const timestamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2);
  return `${timestamp}-${random}`;
}

type image = {
  id: string;
  image: string;
};

export default function Home() {
  const [images, setImages] = useState<image[]>([]);

  const addImage: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    
    setImages([
      ...images,
      {
        id: generarIdUnico(),
        image: `https://randomfox.ca/images/${randomNumber()}.jpg`,
      },
    ]);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-center my-5">Home page</p>
        <button onClick={(event) => addImage(event)}>Generar imagen</button>
        {images.map(({ id, image }) => (
          <div key={id} className="mb-5 ml-5">
            <RandomFox image={image} />
          </div>
        ))}
      </div>
    </>
  );
}
