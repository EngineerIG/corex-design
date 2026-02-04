import * as React from 'react';

export interface Upload2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Upload2Filled = React.forwardRef<SVGSVGElement, Upload2FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 22v-2h16v2H4Zm5-4v-7H5l7-9 7 9h-4v7H9Z" /></svg>
  )
);

Upload2Filled.displayName = 'Upload2Filled';

export default Upload2Filled;
