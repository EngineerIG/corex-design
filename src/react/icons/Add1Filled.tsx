import * as React from 'react';

export interface Add1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Add1Filled = React.forwardRef<SVGSVGElement, Add1FilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M12 21a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 20v-7H4a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 12a.97.97 0 0 1 .288-.713A.967.967 0 0 1 4 11h7V4a.97.97 0 0 1 .287-.712A.968.968 0 0 1 12 3a.97.97 0 0 1 .713.288A.968.968 0 0 1 13 4v7h7a.97.97 0 0 1 .712.287c.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 20 13h-7v7a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 21Z" /></svg>
  )
);

Add1Filled.displayName = 'Add1Filled';

export default Add1Filled;
