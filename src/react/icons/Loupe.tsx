import * as React from 'react';

export interface LoupeProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const Loupe = React.forwardRef<SVGSVGElement, LoupeProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2a9.74 9.74 0 0 1 3.9.788 10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12v8c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 22h-8Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Z" /></svg>
  )
);

Loupe.displayName = 'Loupe';

export default Loupe;
