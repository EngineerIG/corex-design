import * as React from 'react';

export interface FilterAltProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const FilterAlt = React.forwardRef<SVGSVGElement, FilterAltProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 20a.967.967 0 0 1-.712-.288A.968.968 0 0 1 10 19v-6L4.2 5.6c-.25-.333-.287-.683-.112-1.05S4.567 4 5 4h14c.433 0 .738.183.913.55.175.367.137.717-.113 1.05L14 13v6a.97.97 0 0 1-.287.712A.968.968 0 0 1 13 20h-2Zm1-7.7L16.95 6h-9.9L12 12.3Z" /></svg>
  )
);

FilterAlt.displayName = 'FilterAlt';

export default FilterAlt;
