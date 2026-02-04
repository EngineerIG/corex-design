import * as React from 'react';

export interface FactoryFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const FactoryFilled = React.forwardRef<SVGSVGElement, FactoryFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 20v-8.7a1.993 1.993 0 0 1 1.225-1.85L7.6 7.6a1.01 1.01 0 0 1 .95.075c.3.183.45.458.45.825V9l3.625-1.45a.945.945 0 0 1 .938.1c.291.2.437.475.437.825V10h8v10c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 22H4Zm7-4h2v-4h-2v4Zm-4 0h2v-4H7v4Zm8 0h2v-4h-2v4Zm6.8-9.5h-4.625l.725-5.625a.973.973 0 0 1 .338-.625A.98.98 0 0 1 18.9 2h1.225c.25 0 .467.083.65.25a.997.997 0 0 1 .325.625l.7 5.625Z" /></svg>
  )
);

FactoryFilled.displayName = 'FactoryFilled';

export default FactoryFilled;
