import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ReelsIcon = ({ size = 28, color = 'black' }) => {

    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                fill={color}
                fillRule="evenodd"
                d="M1.5 6.5a5 5 0 0 1 5-5h11a5 5 0 0 1 5 5v11a5 5 0 0 1-5 5h-11a5 5 0 0 1-5-5v-11Zm5-4a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4v-11a4 4 0 0 0-4-4h-11Z"
                clipRule="evenodd"
            />
            <Path
                fill={color}
                fillRule="evenodd"
                d="M9.27 10.556a.5.5 0 0 1 .517.034l5 3.5a.5.5 0 0 1 0 .82l-5 3.5A.5.5 0 0 1 9 18v-7a.5.5 0 0 1 .27-.444zM10 11.96v5.08l3.628-2.54L10 11.96zM1.5 8a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z"
                clipRule="evenodd"
            />
            <Path
                fill={color}
                fillRule="evenodd"
                d="M7.842 1.526a.5.5 0 0 1 .632.316l2 6a.5.5 0 0 1-.948.316l-2-6a.5.5 0 0 1 .316-.632zm6 0a.5.5 0 0 1 .633.316l2 6a.5.5 0 0 1-.95.316l-2-6a.5.5 0 0 1 .317-.632z"
                clipRule="evenodd"
            />
        </Svg>
    );
};

export default ReelsIcon;
