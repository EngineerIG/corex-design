import * as React from 'react';

export interface WorkHistoryFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const WorkHistoryFilled = React.forwardRef<SVGSVGElement, WorkHistoryFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m19.65 20.35.7-.7-1.85-1.85V15h-1v3.2l2.15 2.15ZM10 6h4V4h-4v2Zm8 17c-1.383 0-2.563-.488-3.537-1.462C13.488 20.562 13 19.383 13 18s.488-2.563 1.463-3.537C15.438 13.488 16.617 13 18 13s2.563.488 3.538 1.463C22.512 15.438 23 16.617 23 18s-.488 2.563-1.462 3.538C20.562 22.512 19.383 23 18 23ZM4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 19V8c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 6h4V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 10 2h4c.55 0 1.02.196 1.412.587C15.804 2.98 16 3.45 16 4v2h4c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v4.275a6.769 6.769 0 0 0-1.9-.95A6.906 6.906 0 0 0 18 11c-1.933 0-3.583.683-4.95 2.05C11.683 14.417 11 16.067 11 18c0 .517.054 1.03.162 1.538.109.508.28.995.513 1.462H4Z" /></svg>
  )
);

WorkHistoryFilled.displayName = 'WorkHistoryFilled';

export default WorkHistoryFilled;
