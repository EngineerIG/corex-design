import * as React from 'react';

export interface NotificationsOffFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const NotificationsOffFilled = React.forwardRef<SVGSVGElement, NotificationsOffFilledProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="M16.15 19H5a.967.967 0 0 1-.712-.288A.968.968 0 0 1 4 18c0-.283.096-.52.288-.712A.967.967 0 0 1 5 17h1v-7c0-.55.071-1.092.213-1.625A6.1 6.1 0 0 1 6.85 6.85L10 10H7.2L2.1 4.9a.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7.948.948 0 0 1 .7-.275c.284 0 .517.092.7.275l17 17c.183.183.28.413.288.688a.93.93 0 0 1-.288.712.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275L16.15 19ZM18 12.725c0 .2-.058.383-.175.55a1.092 1.092 0 0 1-.45.375.908.908 0 0 1-.575.063.969.969 0 0 1-.5-.263L9.175 6.325a1.057 1.057 0 0 1-.25-.375 1.2 1.2 0 0 1-.075-.425c0-.183.046-.363.138-.538a.871.871 0 0 1 .387-.387 8.16 8.16 0 0 1 .55-.225A5.79 5.79 0 0 1 10.5 4.2v-.7c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 12 2c.417 0 .771.146 1.063.438.291.291.437.645.437 1.062v.7a5.745 5.745 0 0 1 3.25 2.125A5.872 5.872 0 0 1 18 10v2.725ZM12 22c-.5 0-.946-.137-1.337-.413-.392-.274-.588-.645-.588-1.112 0-.133.054-.246.163-.338A.547.547 0 0 1 10.6 20h2.8c.133 0 .254.046.363.137a.426.426 0 0 1 .162.338c0 .467-.196.837-.587 1.112A2.27 2.27 0 0 1 12 22Z" /></svg>
  )
);

NotificationsOffFilled.displayName = 'NotificationsOffFilled';

export default NotificationsOffFilled;
