//React && Functional
import React, { useEffect, useState } from 'react';
import Radium from 'radium';

//Styles
import { text_style } from '../../Styles/StylesText';
import { borderRadius, padding } from '../../Styles/StyleBox';
import { HEXColors, DefaultColors } from '../../Styles/StylesColors';

let Badge = (props) => {
    const [colorBadge, setColor] = useState();

    useEffect(() => {
        setColor(props.color ?? Math.floor(Math.random() * DefaultColors.length));
    }, []);

    return(
        <span style={[
                borderRadius('20px'),
                padding('5px', '5px', '5px', '5px'),
                text_style.center_align,
                props.styles,
                {
                    color: HEXColors.black,
                    minWidth: props.minWidth ?? '100px',
                    display: 'inline-block',
                    fontSize: props.fontSize ?? '15px',
                    fontWeight: 'bolder',
                    backgroundColor: DefaultColors[colorBadge]
                }
            ]}
            onClick={ props.event }
        >
            { props.text }
        </span>
    );
};

export default Radium(Badge);