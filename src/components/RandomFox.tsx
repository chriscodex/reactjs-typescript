import { useRef, type ReactElement } from 'react';

interface RandomFoxProps {
  image: string;
}

function RandomFox({ image }: RandomFoxProps): ReactElement {
  const node = useRef<HTMLImageElement>(null);

  return (
    <img ref={node} src={image} alt="fox" width="320" height="auto" className="rounded" />
  );
}

export default RandomFox;
