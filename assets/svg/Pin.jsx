import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Home = (props) => (
  <Svg
    width={17}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M7.696 17.632 2.324 20.88c-.43.246-.958.072-1.194-.394v0a1.13 1.13 0 0 1-.108-.466V5.622c0-2.746 1.7-3.844 4.146-3.844h5.745c2.371 0 4.146 1.025 4.146 3.661v14.582c0 .26-.094.508-.26.692a.847.847 0 0 1-.627.287.905.905 0 0 1-.431-.119l-5.406-3.25a.616.616 0 0 0-.639 0Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Home;
