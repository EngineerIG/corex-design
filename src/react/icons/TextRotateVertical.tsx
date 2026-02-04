import * as React from 'react';

export interface TextRotateVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const TextRotateVertical = React.forwardRef<SVGSVGElement, TextRotateVerticalProps>(
  ({ size = 24, ...props }, ref) => (
    <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size} ref={ref} {...props}><path d="m13.8 13.2-.8 2.225a.839.839 0 0 1-.325.425c-.15.1-.317.15-.5.15a.84.84 0 0 1-.738-.387.815.815 0 0 1-.087-.813l3.425-9.2a.882.882 0 0 1 .337-.438A.93.93 0 0 1 15.65 5h.7c.2 0 .379.054.537.162a.886.886 0 0 1 .338.438l3.425 9.225a.79.79 0 0 1-.088.8.849.849 0 0 1-.737.375.835.835 0 0 1-.5-.162A.908.908 0 0 1 19 15.4l-.8-2.2h-4.4Zm.55-1.6h3.3l-1.6-4.55h-.1l-1.6 4.55ZM5 16.15V4a.97.97 0 0 1 .287-.712A.968.968 0 0 1 6 3c.283 0 .52.096.712.288A.965.965 0 0 1 7 4v12.15l.4-.375c.2-.183.433-.275.7-.275.266 0 .5.1.7.3a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-2.1 2.1c-.2.2-.434.3-.7.3a.96.96 0 0 1-.7-.3l-2.1-2.1a.948.948 0 0 1-.275-.7c0-.283.1-.525.3-.725A.918.918 0 0 1 3.9 15.5c.266 0 .5.092.7.275l.4.375Z" /></svg>
  )
);

TextRotateVertical.displayName = 'TextRotateVertical';

export default TextRotateVertical;
