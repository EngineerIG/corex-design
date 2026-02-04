import * as React from 'react';

export interface PinchProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Pinch = React.forwardRef<SVGSVGElement, PinchProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M9.5 6V3.55L3.55 9.5H6V11H1V6h1.5v2.45L8.45 2.5H6V1h5v5H9.5Zm5.325 17c-.4 0-.783-.075-1.15-.225a2.942 2.942 0 0 1-.975-.65L7.6 17l.75-.775c.267-.267.58-.446.938-.538a1.998 1.998 0 0 1 1.062.013l1.65.475V8c0-.283.096-.52.287-.713A.968.968 0 0 1 13 7c.283 0 .52.096.713.287.191.192.287.43.287.713v10.825l-2.425-.675 2.55 2.55c.083.083.188.154.313.213a.907.907 0 0 0 .387.087H19c.55 0 1.02-.196 1.413-.587A1.93 1.93 0 0 0 21 19v-4a.97.97 0 0 1 .288-.713A.968.968 0 0 1 22 14a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v4c0 1.1-.392 2.042-1.175 2.825C21.042 22.608 20.1 23 19 23h-4.175ZM15 16v-4c0-.283.096-.52.287-.713A.968.968 0 0 1 16 11a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v4h-2Zm3 0v-3a.97.97 0 0 1 .288-.713A.968.968 0 0 1 19 12a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v3h-2Z" /></svg>
  )
);

Pinch.displayName = 'Pinch';

export default Pinch;
