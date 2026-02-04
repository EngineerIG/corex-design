import * as React from 'react';

export interface DriveFolderUploadFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DriveFolderUploadFilled = React.forwardRef<SVGSVGElement, DriveFolderUploadFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 18V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 4h6l2 2h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 20H4Zm7-3h2v-4.2l1.6 1.6L16 13l-4-4-4 4 1.4 1.4 1.6-1.6V17Z" /></svg>
  )
);

DriveFolderUploadFilled.displayName = 'DriveFolderUploadFilled';

export default DriveFolderUploadFilled;
