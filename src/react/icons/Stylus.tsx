import * as React from 'react';

export interface StylusProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Stylus = React.forwardRef<SVGSVGElement, StylusProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4.175 21a.916.916 0 0 1-.912-.262.916.916 0 0 1-.263-.913l1-4.775L8.95 20l-4.775 1Zm4.775-1L4 15.05 15.45 3.6c.384-.383.858-.575 1.425-.575.567 0 1.042.192 1.425.575l2.1 2.1c.384.384.575.859.575 1.425 0 .567-.192 1.042-.575 1.425L8.95 20Zm7.925-15L6.525 15.35l2.125 2.125L19 7.125 16.875 5Z" /></svg>
  )
);

Stylus.displayName = 'Stylus';

export default Stylus;
