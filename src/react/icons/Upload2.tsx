import * as React from 'react';

export interface Upload2Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Upload2 = React.forwardRef<SVGSVGElement, Upload2Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 22v-2h16v2H4Zm5-4v-7H5l7-9 7 9h-4v7H9Zm2-2h2V9h1.9L12 5.25 9.1 9H11v7Z" /></svg>
  )
);

Upload2.displayName = 'Upload2';

export default Upload2;
