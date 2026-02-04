import * as React from 'react';

export interface MoreVertFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const MoreVertFilled = React.forwardRef<SVGSVGElement, MoreVertFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M12 20c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 18c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 12 16c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 20Zm0-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 12c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 10c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 14Zm0-6c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 0 1 10 6c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 12 4c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 12 8Z" /></svg>
  )
);

MoreVertFilled.displayName = 'MoreVertFilled';

export default MoreVertFilled;
