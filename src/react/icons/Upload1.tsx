import * as React from 'react';

export interface Upload1Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Upload1 = React.forwardRef<SVGSVGElement, Upload1Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 16V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16h-2Zm-5 4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 18v-3h2v3h12v-3h2v3c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 20H6Z" /></svg>
  )
);

Upload1.displayName = 'Upload1';

export default Upload1;
