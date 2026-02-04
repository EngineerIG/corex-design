import * as React from 'react';

export interface History2Props extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const History2 = React.forwardRef<SVGSVGElement, History2Props>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M12 22c-2.584 0-4.825-.858-6.725-2.575C3.375 17.708 2.3 15.567 2.05 13h2.025c.25 2.017 1.129 3.688 2.637 5.012C8.221 19.337 9.983 20 12 20c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4a7.829 7.829 0 0 0-3.988 1.063A7.822 7.822 0 0 0 5.1 8H8v2H2.2c.483-2.333 1.641-4.25 3.475-5.75C7.508 2.75 9.616 2 12 2a9.74 9.74 0 0 1 3.9.788 10.098 10.098 0 0 1 3.175 2.137c.9.9 1.612 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.959 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Zm2.8-5.8L11 12.4V7h2v4.6l3.2 3.2-1.4 1.4Z" /></svg>
  )
);

History2.displayName = 'History2';

export default History2;
