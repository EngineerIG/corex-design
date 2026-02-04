import * as React from 'react';

export interface MarkUnreadChatAltFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const MarkUnreadChatAltFilled = React.forwardRef<SVGSVGElement, MarkUnreadChatAltFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M19 6a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 16 3c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 19 0c.833 0 1.542.292 2.125.875S22 2.167 22 3s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 19 6ZM6 18l-2.3 2.3c-.317.317-.68.387-1.088.212-.408-.175-.612-.487-.612-.937V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 2h10.1a5.085 5.085 0 0 0 0 2c.083.383.2.742.35 1.075.15.333.333.642.55.925H7a.968.968 0 0 0-.713.287A.968.968 0 0 0 6 7c0 .283.096.52.287.713.192.191.43.287.713.287h12a5.1 5.1 0 0 0 1.575-.25A4.674 4.674 0 0 0 22 7v9c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 18H6Zm1-7h10a.97.97 0 0 0 .712-.287A.968.968 0 0 0 18 10a.967.967 0 0 0-.288-.713A.968.968 0 0 0 17 9H7a.968.968 0 0 0-.713.287A.968.968 0 0 0 6 10c0 .283.096.52.287.713.192.191.43.287.713.287Zm0 3h6c.283 0 .52-.096.713-.287A.968.968 0 0 0 14 13a.968.968 0 0 0-.287-.713A.968.968 0 0 0 13 12H7a.967.967 0 0 0-.713.287A.968.968 0 0 0 6 13c0 .283.096.52.287.713.192.191.43.287.713.287Z" /></svg>
  )
);

MarkUnreadChatAltFilled.displayName = 'MarkUnreadChatAltFilled';

export default MarkUnreadChatAltFilled;
