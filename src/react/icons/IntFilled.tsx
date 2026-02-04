import * as React from 'react';

export interface IntFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const IntFilled = React.forwardRef<SVGSVGElement, IntFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M13.337 2.52V7h-.947V2.52h.947Zm4.526 0V7h-.818l-1.949-2.82h-.033V7h-.947V2.52h.831l1.934 2.818h.04V2.52h.942Zm.612.781V2.52h3.68v.781h-1.372V7h-.936V3.301h-1.372ZM3.75 22.5V8.25h12L14.25 12l1.5 3.75H5.25v6.75h-1.5Z" /></svg>
  )
);

IntFilled.displayName = 'IntFilled';

export default IntFilled;
