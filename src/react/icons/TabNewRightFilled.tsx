import * as React from 'react';

export interface TabNewRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const TabNewRightFilled = React.forwardRef<SVGSVGElement, TabNewRightFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m19 23-1.4-1.4 1.575-1.6H15v-2h4.175L17.6 16.4 19 15l4 4-4 4ZM5 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 3 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 5 3h14c.55 0 1.02.196 1.413.587.39.393.587.863.587 1.413v8.35a5.548 5.548 0 0 0-.988-.262A6.157 6.157 0 0 0 18.976 13c-1.667 0-3.08.583-4.238 1.75C13.58 15.917 13 17.333 13 19c0 .35.03.692.088 1.025.058.333.145.658.262.975H5Zm6-4h2v-4h4v-2h-4V7h-2v4H7v2h4v4Z" /></svg>
  )
);

TabNewRightFilled.displayName = 'TabNewRightFilled';

export default TabNewRightFilled;
