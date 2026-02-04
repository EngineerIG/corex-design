import * as React from 'react';

export interface ArrowCoolDownProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ArrowCoolDown = React.forwardRef<SVGSVGElement, ArrowCoolDownProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m12 22-7-7 1.4-1.425 4.6 4.6V11h2v7.175l4.6-4.575L19 15l-7 7ZM11 9V6h2v3h-2Zm0-5V2h2v2h-2Z" /></svg>
  )
);

ArrowCoolDown.displayName = 'ArrowCoolDown';

export default ArrowCoolDown;
