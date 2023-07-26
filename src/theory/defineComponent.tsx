import type { FC, FunctionComponent, ReactElement } from 'react';

// Implicit way
function way1() {
  return (
    <div>Implicit way</div>
  )
}

// Explicit way 1
function way2(): JSX.Element {
  return (
    <div>Explicit way 1</div>
  )
}

// Explicit way 2
function way3(): ReactElement {
  return (
    <div>Explicit way 2</div>
  )
}

function way4(): FunctionComponent {
  return (
    <div>Explicit way 4</div>
  )
}

function way5(): FC {
  return (
    <div>Explicit way 4</div>
  )
}
