import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.525 21H4.606c-1.737 0-3.146-1.54-3.146-3.438V8.847c.007-.747.328-1.45.872-1.904l5.934-5.258a2.67 2.67 0 0 1 3.573 0l5.96 5.248c.541.456.862 1.158.871 1.905v8.724c0 1.899-1.408 3.438-3.145 3.438Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
