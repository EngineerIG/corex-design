import * as React from 'react';

export interface DownProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Down = React.forwardRef<SVGSVGElement, DownProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M13.414 17.044a2 2 0 0 1-2.828 0l-8.3-8.3A1.817 1.817 0 0 1 4.851 6.17L12 13.28l7.148-7.11a1.817 1.817 0 0 1 2.567 2.573l-8.3 8.301Z" /></svg>
  )
);

Down.displayName = 'Down';

export default Down;
