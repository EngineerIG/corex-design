import * as React from 'react';

export interface VariableAddProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const VariableAdd = React.forwardRef<SVGSVGElement, VariableAddProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M14 17H3V7h18v3h-2V9H5v6h9v2Zm5 3v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2Z" /></svg>
  )
);

VariableAdd.displayName = 'VariableAdd';

export default VariableAdd;
