import * as React from 'react';

export interface Right2Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Right2 = React.forwardRef<SVGSVGElement, Right2Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M8.707 21.293c-.63.63-1.707.184-1.707-.707V3.414c0-.89 1.077-1.337 1.707-.707l8.586 8.586a1 1 0 0 1 0 1.414l-8.586 8.586Z" /></svg>
  )
);

Right2.displayName = 'Right2';

export default Right2;
