import * as React from 'react';

export interface TopProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Top = React.forwardRef<SVGSVGElement, TopProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4.852 17.18a1.817 1.817 0 0 1-2.567-2.573l8.3-8.301a2 2 0 0 1 2.83 0l8.3 8.3a1.817 1.817 0 0 1-2.567 2.574L12 10.07l-7.148 7.11Z" /></svg>
  )
);

Top.displayName = 'Top';

export default Top;
