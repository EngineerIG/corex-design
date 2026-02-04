import * as React from 'react';

export interface UploadFileProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const UploadFile = React.forwardRef<SVGSVGElement, UploadFileProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825V19Zm-5 3c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h8l6 6v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm7-13V4H6v16h12V9h-5Z" /></svg>
  )
);

UploadFile.displayName = 'UploadFile';

export default UploadFile;
