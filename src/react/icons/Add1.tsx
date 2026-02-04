import * as React from 'react';

export interface Add1Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Add1 = React.forwardRef<SVGSVGElement, Add1Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 13H6a.967.967 0 0 1-.713-.287A.968.968 0 0 1 5 12c0-.283.096-.52.287-.713A.967.967 0 0 1 6 11h5V6c0-.283.096-.52.287-.713A.968.968 0 0 1 12 5c.283 0 .52.096.713.287.191.192.287.43.287.713v5h5a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 18 13h-5v5a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 19a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 18v-5Z" /></svg>
  )
);

Add1.displayName = 'Add1';

export default Add1;
