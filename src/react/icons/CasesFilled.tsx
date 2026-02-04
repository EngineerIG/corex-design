import * as React from 'react';

export interface CasesFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const CasesFilled = React.forwardRef<SVGSVGElement, CasesFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M3 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 1 20V9h2v11h17v2H3Zm4-4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 5 16V5h5V3c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 12 1h4c.55 0 1.02.196 1.413.587.39.393.587.863.587 1.413v2h5v11c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 21 18H7Zm5-13h4V3h-4v2Z" /></svg>
  )
);

CasesFilled.displayName = 'CasesFilled';

export default CasesFilled;
