import React from "react";
import {BsSun} from "react-icons/bs";
import * as C from "./style";
import { Flex } from "../../style";


export function NavBar() {
    return <C.Container>
    <Flex> 
        <C.BtnTheme>
            <BsSun />
        </C.BtnTheme> 
    </Flex>
    </C.Container>
}