import * as React from 'react';

export interface CloseProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Close = React.forwardRef<SVGSVGElement, CloseProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m12 13.49-5.217 5.217a1.01 1.01 0 0 1-.745.293 1.01 1.01 0 0 1-.745-.293A1.01 1.01 0 0 1 5 17.962c0-.302.098-.55.293-.745L10.509 12 5.293 6.783A1.01 1.01 0 0 1 5 6.038c0-.302.098-.55.293-.745A1.01 1.01 0 0 1 6.038 5c.302 0 .55.098.745.293L12 10.509l5.217-5.216A1.01 1.01 0 0 1 17.962 5c.302 0 .55.098.745.293.195.195.293.443.293.745s-.098.55-.293.745L13.491 12l5.216 5.217c.195.195.293.443.293.745s-.098.55-.293.745a1.01 1.01 0 0 1-.745.293 1.01 1.01 0 0 1-.745-.293L12 13.491Z" /></svg>
  )
);

Close.displayName = 'Close';

export default Close;
