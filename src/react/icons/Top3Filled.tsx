import * as React from 'react';

export interface Top3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Top3Filled = React.forwardRef<SVGSVGElement, Top3FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M10.9 16.4h2.2v-4.62l1.76 1.76L16.4 12 12 7.6 7.6 12l1.54 1.54 1.76-1.76v4.62ZM12 23c-1.522 0-2.952-.289-4.29-.866a11.11 11.11 0 0 1-3.492-2.352 11.109 11.109 0 0 1-2.352-3.492A10.711 10.711 0 0 1 1 12c0-1.522.289-2.952.866-4.29a11.108 11.108 0 0 1 2.352-3.492A11.12 11.12 0 0 1 7.71 1.866 10.711 10.711 0 0 1 12 1c1.522 0 2.952.289 4.29.866a11.109 11.109 0 0 1 3.492 2.352 11.11 11.11 0 0 1 2.352 3.492C22.71 9.048 23 10.478 23 12c0 1.522-.289 2.952-.866 4.29a11.11 11.11 0 0 1-2.352 3.492 11.11 11.11 0 0 1-3.492 2.352A10.711 10.711 0 0 1 12 23Z" /></svg>
  )
);

Top3Filled.displayName = 'Top3Filled';

export default Top3Filled;
