"use client"

import {TypeAnimation} from "react-type-animation";
import React from "react";

const LandingTyper = ({ sequences, interval, speed }) => {

    const animationSequence = sequences.flatMap(sequence => [sequence, interval]);

    return (
        <TypeAnimation
            sequence={animationSequence}
            wrapper="span"
            speed={speed}
            repeat={Infinity}
        />
    );

};

LandingTyper.displayName = "LandingTyper";
export default LandingTyper;