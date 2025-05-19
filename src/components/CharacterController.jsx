import { Joystick } from "playroomkit"
import React, { useRef } from 'react';
import { CharacterSoldier } from "./CharacterSoldier";
import { useEffect, useState } from "react";

export const CharacterController = ({
        state,
        joystick,
        usePlayer,
        ...props
    }) => {
        const group = useRef();
        const character = useRef();
        const [animation, setAnimation] = useState("Idle");
        return (
            <group ref={group} {...props}>
                <group ref={character}>
                    <CharacterSoldier
                        color={state.state.profile?.color}
                        animation={animation}
                    />
                </group>
            </group>
        )
    }