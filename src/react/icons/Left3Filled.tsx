import * as React from 'react';

export interface Left3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Left3Filled = React.forwardRef<SVGSVGElement, Left3FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m12 16.4 1.54-1.54-1.76-1.76h4.62v-2.2h-4.62l1.76-1.76L12 7.6 7.6 12l4.4 4.4Zm0 6.6c-1.522 0-2.952-.289-4.29-.866a11.11 11.11 0 0 1-3.492-2.352 11.109 11.109 0 0 1-2.352-3.492A10.711 10.711 0 0 1 1 12c0-1.522.289-2.952.866-4.29a11.108 11.108 0 0 1 2.352-3.492A11.12 11.12 0 0 1 7.71 1.866 10.711 10.711 0 0 1 12 1c1.522 0 2.952.289 4.29.866a11.109 11.109 0 0 1 3.492 2.352 11.11 11.11 0 0 1 2.352 3.492C22.71 9.048 23 10.478 23 12c0 1.522-.289 2.952-.866 4.29a11.11 11.11 0 0 1-2.352 3.492 11.11 11.11 0 0 1-3.492 2.352A10.711 10.711 0 0 1 12 23Z" /></svg>
  )
);

Left3Filled.displayName = 'Left3Filled';

export default Left3Filled;
