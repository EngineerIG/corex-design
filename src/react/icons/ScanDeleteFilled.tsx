import * as React from 'react';

export interface ScanDeleteFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ScanDeleteFilled = React.forwardRef<SVGSVGElement, ScanDeleteFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M12 9h5l-5-5v5Zm2.9 12.5-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.075 2.1 2.075 2.1-1.4 1.4-2.1-2.075-2.1 2.075ZM5 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 20V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 2h8l6 6v4.35a5.548 5.548 0 0 0-.988-.262A6.157 6.157 0 0 0 16.976 12c-1.667 0-3.08.58-4.238 1.738C11.58 14.896 11 16.308 11 17.974A5.96 5.96 0 0 0 12.55 22H5Z" /></svg>
  )
);

ScanDeleteFilled.displayName = 'ScanDeleteFilled';

export default ScanDeleteFilled;
