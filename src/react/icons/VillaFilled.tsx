import * as React from 'react';

export interface VillaFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const VillaFilled = React.forwardRef<SVGSVGElement, VillaFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M9 21v-7c0-.55.196-1.021.588-1.413A1.926 1.926 0 0 1 11 12h6c0-.55.196-1.021.587-1.413A1.926 1.926 0 0 1 19 10c.55 0 1.02.196 1.413.587.391.392.587.863.587 1.413v9h-5v-4a.968.968 0 0 0-.287-.713A.968.968 0 0 0 15 16a.968.968 0 0 0-.713.287A.968.968 0 0 0 14 17v4H9Zm-6 0V9.375c0-.417.117-.796.35-1.138.233-.341.542-.587.925-.737L14.65 3.525c.333-.134.642-.1.925.1.283.2.425.475.425.825V10h-6a2.89 2.89 0 0 0-2.125.875A2.893 2.893 0 0 0 7 13v8H3Z" /></svg>
  )
);

VillaFilled.displayName = 'VillaFilled';

export default VillaFilled;
