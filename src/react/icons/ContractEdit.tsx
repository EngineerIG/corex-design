import * as React from 'react';

export interface ContractEditProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const ContractEdit = React.forwardRef<SVGSVGElement, ContractEditProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M9 9V7h9v2H9Zm0 3v-2h9v2H9Zm3 10H6a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 3 19v-3h3V2h15v9.025a3.783 3.783 0 0 0-2 .35V4H8v12h6l-2 2H5v1c0 .283.096.52.287.712.192.192.43.288.713.288h6v2Zm2 0v-3.075l5.525-5.5c.15-.15.317-.258.5-.325a1.6 1.6 0 0 1 .55-.1 1.504 1.504 0 0 1 1.075.45l.925.925c.133.15.238.317.313.5.074.183.112.367.112.55 0 .183-.033.37-.1.563a1.342 1.342 0 0 1-.325.512l-5.5 5.5H14Zm1.5-1.5h.95l3.025-3.05-.45-.475-.475-.45-3.05 3.025v.95Zm3.525-3.525-.475-.45.925.925-.45-.475Z" /></svg>
  )
);

ContractEdit.displayName = 'ContractEdit';

export default ContractEdit;
