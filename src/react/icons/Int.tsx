import * as React from 'react';

export interface IntProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Int = React.forwardRef<SVGSVGElement, IntProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m14.25 12 1.5 3.75H5.25v6.75h-1.5V8.25h12L14.25 12Zm-9 2.25h8.287l-.9-2.25.9-2.25H5.25v4.5ZM13.337 7h-.947V2.52h.947V7Zm3.544-1.662h.04V2.52h.942V7h-.818l-1.95-2.82h-.032V7h-.947V2.52h.831l1.934 2.818ZM22.154 3.3h-1.37V7h-.937V3.3h-1.371v-.78h3.678v.78Z" /></svg>
  )
);

Int.displayName = 'Int';

export default Int;
