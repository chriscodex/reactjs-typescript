import { useRef, type ReactElement } from 'react';

function RefExample(): ReactElement {
  const node = useRef<HTMLImageElement>(null);

  return (
    <div>
      <img ref={node} src="" alt="" />
    </div>
  );
}
