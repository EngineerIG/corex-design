import * as React from 'react';

export interface DomainAddProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const DomainAdd = React.forwardRef<SVGSVGElement, DomainAddProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 3h6c.55 0 1.02.196 1.412.587C11.804 3.98 12 4.45 12 5v2h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v5a.97.97 0 0 1-.288.713A.968.968 0 0 1 21 15a.968.968 0 0 1-.712-.287A.968.968 0 0 1 20 14V9h-8v2h2v2h-2v2h2v2h-2v2h3a.97.97 0 0 1 .713.288c.191.191.287.429.287.712s-.096.52-.287.712A.968.968 0 0 1 15 21H4Zm0-2h2v-2H4v2Zm0-4h2v-2H4v2Zm0-4h2V9H4v2Zm0-4h2V5H4v2Zm4 12h2v-2H8v2Zm0-4h2v-2H8v2Zm0-4h2V9H8v2Zm0-4h2V5H8v2Zm13 16a.968.968 0 0 1-.712-.288A.968.968 0 0 1 20 22v-1h-1a.968.968 0 0 1-.712-.288A.968.968 0 0 1 18 20c0-.283.096-.52.288-.712A.968.968 0 0 1 19 19h1v-1c0-.283.096-.52.288-.712A.968.968 0 0 1 21 17c.283 0 .52.096.712.288A.965.965 0 0 1 22 18v1h1c.283 0 .52.096.712.288.192.191.288.429.288.712s-.096.52-.288.712A.968.968 0 0 1 23 21h-1v1c0 .283-.096.52-.288.712A.968.968 0 0 1 21 23Zm-5-10v-2h2v2h-2Zm0 4v-2h2v2h-2Z" /></svg>
  )
);

DomainAdd.displayName = 'DomainAdd';

export default DomainAdd;
