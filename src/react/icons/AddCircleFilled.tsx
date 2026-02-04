import * as React from 'react';

export interface AddCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const AddCircleFilled = React.forwardRef<SVGSVGElement, AddCircleFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 13v3c0 .283.096.52.287.712.192.192.43.288.713.288s.52-.096.713-.288A.968.968 0 0 0 13 16v-3h3a.97.97 0 0 0 .712-.287A.968.968 0 0 0 17 12a.968.968 0 0 0-.288-.713A.968.968 0 0 0 16 11h-3V8a.967.967 0 0 0-.287-.713A.968.968 0 0 0 12 7a.968.968 0 0 0-.713.287A.967.967 0 0 0 11 8v3H8a.967.967 0 0 0-.713.287A.968.968 0 0 0 7 12c0 .283.096.52.287.713.192.191.43.287.713.287h3Zm1 9a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2a9.74 9.74 0 0 1 3.9.788 10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Z" /></svg>
  )
);

AddCircleFilled.displayName = 'AddCircleFilled';

export default AddCircleFilled;
