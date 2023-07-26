import { ReactElement, useState } from 'react';

function StateExample(): ReactElement {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>{counter}</div>
  )
}

type item = {
  id: string;
  image: string;
}

function StateExampleObject(): ReactElement {
  const [items, setItems] = useState<item[]>([
    {id: '..', image: 'https://...'},
    {id: '..', image: 'https://...'},
    {id: '..', image: 'https://...'}
  ]);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  )
}
