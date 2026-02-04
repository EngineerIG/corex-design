import * as React from 'react';

export interface TextRotateUpProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const TextRotateUp = React.forwardRef<SVGSVGElement, TextRotateUpProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><mask id="a" width={size} height={size} x={0} y={0} maskUnits="userSpaceOnUse" style={{
    maskType: "alpha"
  }}><path d="M0 0h24v24H0z" /></mask><g mask="url(#a)"><path d="m17 6.8-.35.35a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7.95.95 0 0 1 .275-.7L17.3 3.7c.2-.2.433-.296.7-.287.267.008.5.104.7.287l2.075 2.025c.2.2.296.438.288.713a1.02 1.02 0 0 1-.313.712c-.2.183-.433.28-.7.288a.916.916 0 0 1-.7-.288L19 6.8V19a.97.97 0 0 1-.288.713A.968.968 0 0 1 18 20a.968.968 0 0 1-.712-.287A.968.968 0 0 1 17 19V6.8Zm-5.8 7.4 2.225.8a.839.839 0 0 1 .425.325c.1.15.15.317.15.5a.84.84 0 0 1-.387.738.815.815 0 0 1-.813.087l-9.2-3.425a.882.882 0 0 1-.438-.337A.93.93 0 0 1 3 12.35v-.7c0-.2.054-.38.163-.537a.882.882 0 0 1 .437-.338l9.225-3.425c.283-.1.55-.067.8.1s.375.4.375.7a.89.89 0 0 1-.162.513A.882.882 0 0 1 13.4 9l-2.2.75v4.45Zm-1.6-.55v-3.3l-4.55 1.6v.1l4.55 1.6Z" /></g></svg>
  )
);

TextRotateUp.displayName = 'TextRotateUp';

export default TextRotateUp;
