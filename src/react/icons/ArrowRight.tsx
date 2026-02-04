import * as React from 'react';

export interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ArrowRight = React.forwardRef<SVGSVGElement, ArrowRightProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m18.857 10.772-3.56-3.56c-.225-.225-.338-.511-.338-.86 0-.347.113-.634.338-.859.225-.225.511-.337.859-.337s.634.112.86.337l5.646 5.647c.123.123.21.256.261.4.051.143.077.296.077.46 0 .164-.026.317-.077.46a1.077 1.077 0 0 1-.26.4l-5.648 5.646c-.225.225-.511.338-.859.338s-.634-.113-.86-.338c-.224-.225-.337-.511-.337-.86 0-.347.113-.633.338-.858l3.56-3.56H2.652c-.348 0-.64-.118-.874-.354A1.188 1.188 0 0 1 1.425 12c0-.348.117-.64.353-.875.235-.235.526-.353.874-.353h16.205Z" /></svg>
  )
);

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;
