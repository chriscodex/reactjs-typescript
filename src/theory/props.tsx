import type { ReactElement } from 'react';

type componentProps = {
  name: string;
}

function DefinePropsComponent({name}: componentProps): ReactElement {
  return (
    <div>
      define props
    </div>
  )
}

function foo(): ReactElement {
  return (
    <DefinePropsComponent name='name' />
  )
}