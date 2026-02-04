import * as React from 'react';

export interface NotificationsUnreadFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const NotificationsUnreadFilled = React.forwardRef<SVGSVGElement, NotificationsUnreadFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M12 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 10 20h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Zm-7-3a.967.967 0 0 1-.713-.288A.968.968 0 0 1 4 18a.97.97 0 0 1 .287-.712A.967.967 0 0 1 5 17h1v-7c0-1.383.417-2.612 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .77.146 1.063.438.291.291.437.645.437 1.062v.325a4.634 4.634 0 0 0-.375 1.05A5.062 5.062 0 0 0 13 6c0 1.383.488 2.563 1.463 3.537C15.438 10.512 16.617 11 18 11v6h1c.283 0 .52.096.712.288.192.191.288.429.288.712s-.096.52-.288.712A.968.968 0 0 1 19 19H5ZM18 9a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 15 6c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 18 3c.833 0 1.542.292 2.125.875S21 5.167 21 6s-.292 1.542-.875 2.125A2.893 2.893 0 0 1 18 9Z" /></svg>
  )
);

NotificationsUnreadFilled.displayName = 'NotificationsUnreadFilled';

export default NotificationsUnreadFilled;
