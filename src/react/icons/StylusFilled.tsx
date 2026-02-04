import * as React from 'react';

export interface StylusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const StylusFilled = React.forwardRef<SVGSVGElement, StylusFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4.2 20.975a.916.916 0 0 1-.913-.262.916.916 0 0 1-.262-.913l.875-4.25 4.55 4.55-4.25.875Zm5.875-2.1-4.95-4.95L15.45 3.6c.383-.383.858-.575 1.425-.575.566 0 1.041.192 1.425.575l2.1 2.1c.383.384.575.859.575 1.425 0 .567-.192 1.042-.575 1.425L10.075 18.875Z" /></svg>
  )
);

StylusFilled.displayName = 'StylusFilled';

export default StylusFilled;
