import * as React from 'react';

export interface CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Check = React.forwardRef<SVGSVGElement, CheckProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4 9.55 18Z" /></svg>
  )
);

Check.displayName = 'Check';

export default Check;
