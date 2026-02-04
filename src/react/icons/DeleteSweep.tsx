import * as React from 'react';

export interface DeleteSweepProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DeleteSweep = React.forwardRef<SVGSVGElement, DeleteSweepProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M15 18.5v-2h4v2h-4Zm0-8v-2h7v2h-7Zm0 4v-2h6v2h-6Zm-12-6H2v-2h4V5h4v1.5h4v2h-1v9c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 11 19.5H5c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 17.5v-9Zm2 0v9h6v-9H5Z" /></svg>
  )
);

DeleteSweep.displayName = 'DeleteSweep';

export default DeleteSweep;
