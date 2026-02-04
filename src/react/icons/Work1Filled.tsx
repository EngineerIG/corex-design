import * as React from 'react';

export interface Work1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Work1Filled = React.forwardRef<SVGSVGElement, Work1FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 19V8c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 6h4V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 10 2h4c.55 0 1.02.196 1.412.587C15.804 2.98 16 3.45 16 4v2h4c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v11c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 21H4Zm6-15h4V4h-4v2Z" /></svg>
  )
);

Work1Filled.displayName = 'Work1Filled';

export default Work1Filled;
