import * as React from 'react';

export interface LeftProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Left = React.forwardRef<SVGSVGElement, LeftProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4.806 13.414a2 2 0 0 1 0-2.828l8.3-8.3a1.817 1.817 0 0 1 2.574 2.566L8.57 12l7.11 7.148a1.817 1.817 0 0 1-2.574 2.567l-8.3-8.3Z" /></svg>
  )
);

Left.displayName = 'Left';

export default Left;
