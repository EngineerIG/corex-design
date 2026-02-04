import * as React from 'react';

export interface DeleteFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeleteFilled = React.forwardRef<SVGSVGElement, DeleteFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M7 21c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 19V6H4V4h5V3h6v1h5v2h-1v13c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z" /></svg>
  )
);

DeleteFilled.displayName = 'DeleteFilled';

export default DeleteFilled;
