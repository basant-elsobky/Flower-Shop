
import React from 'react';
import First from './first/First';
import Description from './description/Description';

export default function ProductLayout({ children }) {
  return (
    <div className="product-layout">
    <First/>
      <main>{children}</main>
      <Description/>
    </div>
  );
}
