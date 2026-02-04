import * as React from 'react';

export interface ResizerProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Resizer = React.forwardRef<SVGSVGElement, ResizerProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M19.19 9.091a1.248 1.248 0 0 1 1.703 0c.47.448.47 1.174 0 1.621L10.05 21.031a1.248 1.248 0 0 1-1.703 0 1.108 1.108 0 0 1 0-1.621L19.189 9.09Zm0 5.733a1.248 1.248 0 0 1 1.703 0c.47.447.47 1.173 0 1.62l-4.819 4.587a1.25 1.25 0 0 1-1.704 0 1.109 1.109 0 0 1 0-1.622l4.82-4.585Zm.171-11.849a1.249 1.249 0 0 1 1.704-.01c.473.445.478 1.171.01 1.621L4.635 20.421a1.25 1.25 0 0 1-1.703.01 1.109 1.109 0 0 1-.01-1.622l16.44-15.834Z" /></svg>
  )
);

Resizer.displayName = 'Resizer';

export default Resizer;
