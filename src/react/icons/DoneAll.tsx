import * as React from 'react';

export interface DoneAllProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DoneAll = React.forwardRef<SVGSVGElement, DoneAllProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m6.7 18-5.65-5.65 1.425-1.4 5.65 5.65L6.7 18Zm5.65 0L6.7 12.35l1.4-1.425 4.25 4.25 9.2-9.2 1.4 1.425L12.35 18Zm0-5.65-1.425-1.4L15.875 6 17.3 7.4l-4.95 4.95Z" /></svg>
  )
);

DoneAll.displayName = 'DoneAll';

export default DoneAll;
