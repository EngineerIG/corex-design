import * as React from 'react';

export interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ArrowDown = React.forwardRef<SVGSVGElement, ArrowDownProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m13.44 18.645 3.56-3.56c.225-.225.511-.338.86-.338.347 0 .633.113.858.338.226.225.338.511.338.86 0 .347-.112.633-.338.858l-5.646 5.648c-.123.122-.256.21-.4.26a1.36 1.36 0 0 1-.46.077 1.36 1.36 0 0 1-.46-.077 1.078 1.078 0 0 1-.4-.26l-5.646-5.648c-.225-.225-.338-.511-.338-.859s.113-.634.338-.86c.225-.224.511-.337.86-.337.347 0 .633.113.858.338l3.56 3.56V2.44c0-.348.118-.64.354-.874.235-.236.526-.353.874-.353s.64.117.875.353c.235.235.353.526.353.874v16.205Z" /></svg>
  )
);

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;
