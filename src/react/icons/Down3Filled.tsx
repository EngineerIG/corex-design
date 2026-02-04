import * as React from 'react';

export interface Down3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Down3Filled = React.forwardRef<SVGSVGElement, Down3FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m12 16.4 4.4-4.4-1.54-1.54-1.76 1.76V7.6h-2.2v4.62l-1.76-1.76L7.6 12l4.4 4.4Zm0 6.6c-1.522 0-2.952-.289-4.29-.866a11.11 11.11 0 0 1-3.492-2.352 11.109 11.109 0 0 1-2.352-3.492A10.711 10.711 0 0 1 1 12c0-1.522.289-2.952.866-4.29a11.108 11.108 0 0 1 2.352-3.492A11.12 11.12 0 0 1 7.71 1.866 10.711 10.711 0 0 1 12 1c1.522 0 2.952.289 4.29.866a11.109 11.109 0 0 1 3.492 2.352 11.11 11.11 0 0 1 2.352 3.492C22.71 9.048 23 10.478 23 12c0 1.522-.289 2.952-.866 4.29a11.11 11.11 0 0 1-2.352 3.492 11.11 11.11 0 0 1-3.492 2.352A10.711 10.711 0 0 1 12 23Z" /></svg>
  )
);

Down3Filled.displayName = 'Down3Filled';

export default Down3Filled;
