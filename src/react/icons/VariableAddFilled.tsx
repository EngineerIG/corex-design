import * as React from 'react';

export interface VariableAddFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const VariableAddFilled = React.forwardRef<SVGSVGElement, VariableAddFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M3 17V7h18v3.075a3.397 3.397 0 0 0-.488-.063A9.824 9.824 0 0 0 20 10c-1.667 0-3.083.583-4.25 1.75C14.583 12.917 14 14.333 14 16c0 .183.004.354.012.512.009.159.03.321.063.488H3Zm16 3v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2Z" /></svg>
  )
);

VariableAddFilled.displayName = 'VariableAddFilled';

export default VariableAddFilled;
