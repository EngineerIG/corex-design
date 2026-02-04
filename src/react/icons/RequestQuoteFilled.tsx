import * as React from 'react';

export interface RequestQuoteFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const RequestQuoteFilled = React.forwardRef<SVGSVGElement, RequestQuoteFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M6 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 4 20V4c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 6 2h8l6 6v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 18 22H6Zm5-3h2v-1h1a.97.97 0 0 0 .713-.288A.968.968 0 0 0 15 17v-3a.968.968 0 0 0-.287-.713A.968.968 0 0 0 14 13h-3v-1h4v-2h-2V9h-2v1h-1a.967.967 0 0 0-.713.287A.968.968 0 0 0 9 11v3c0 .283.096.52.287.713.192.191.43.287.713.287h3v1H9v2h2v1Zm2.175-11h4l-4-4v4Z" /></svg>
  )
);

RequestQuoteFilled.displayName = 'RequestQuoteFilled';

export default RequestQuoteFilled;
