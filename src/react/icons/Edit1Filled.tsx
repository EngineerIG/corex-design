import * as React from 'react';

export interface Edit1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Edit1Filled = React.forwardRef<SVGSVGElement, Edit1FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M3 21v-4.25L16.2 3.575c.2-.183.42-.325.663-.425.241-.1.495-.15.762-.15s.525.05.775.15c.25.1.467.25.65.45L20.425 5c.2.183.346.4.438.65a2.165 2.165 0 0 1 0 1.512 1.874 1.874 0 0 1-.438.663L7.25 21H3ZM17.6 7.8 19 6.4 17.6 5l-1.4 1.4 1.4 1.4Z" /></svg>
  )
);

Edit1Filled.displayName = 'Edit1Filled';

export default Edit1Filled;
