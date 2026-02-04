import * as React from 'react';

export interface Download2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Download2Filled = React.forwardRef<SVGSVGElement, Download2FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 22v-2h16v2H4Zm8-4L5 9h4V2h6v7h4l-7 9Z" /></svg>
  )
);

Download2Filled.displayName = 'Download2Filled';

export default Download2Filled;
