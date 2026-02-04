import * as React from 'react';

export interface Download2Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Download2 = React.forwardRef<SVGSVGElement, Download2Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 22v-2h16v2H4Zm8-4L5 9h4V2h6v7h4l-7 9Zm0-3.25L14.9 11H13V4h-2v7H9.1l2.9 3.75Z" /></svg>
  )
);

Download2.displayName = 'Download2';

export default Download2;
