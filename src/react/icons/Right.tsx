import * as React from 'react';

export interface RightProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Right = React.forwardRef<SVGSVGElement, RightProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M6.495 4.527A1.817 1.817 0 0 1 9.068 1.96l8.301 8.3a2 2 0 0 1 0 2.829l-8.3 8.3a1.817 1.817 0 0 1-2.574-2.566l7.109-7.148-7.11-7.148Z" /></svg>
  )
);

Right.displayName = 'Right';

export default Right;
