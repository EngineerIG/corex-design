import * as React from 'react';

export interface Top2Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Top2 = React.forwardRef<SVGSVGElement, Top2Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M3.414 17c-.89 0-1.337-1.077-.707-1.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586c.63.63.184 1.707-.707 1.707H3.414Z" /></svg>
  )
);

Top2.displayName = 'Top2';

export default Top2;
