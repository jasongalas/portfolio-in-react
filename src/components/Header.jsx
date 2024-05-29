import React from 'react'

export default function Header( {children} ) {

  return (
      <header className="header">
        <h1>Paw's Portfolio</h1>
        {children}
      </header>
  );
}
