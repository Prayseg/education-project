declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import * as React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;

  export default SVG;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__ : boolean;
