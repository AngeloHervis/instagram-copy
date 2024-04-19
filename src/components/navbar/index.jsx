import {BsSun} from "react-icons/bs";
import {BiMoon} from "react-icons/bi";

import LogoInstagram from "../../assets/logo-instagram.svg";

import * as C from "./style";
import { Flex } from "../../style/index";

export function NavBar({themeToggler, theme}) {
    return <C.Container>
    <Flex> 
        <C.BtnTheme onClick = {themeToggler}>
            {theme === 'light' ? <BiMoon /> : <BsSun />}
        </C.BtnTheme> 
    </Flex>

    <img src={LogoInstagram} alt="Logo Instagram" />

    <Flex>
        <C.Profile>
            <img src="https://avatars.githubusercontent.com/u/109084569?v=4" alt="Imagem Perfil Github" />
        </C.Profile>
        <Flex gap="4px">
            <Typography>Angelo Hervis</Typography>
            <Typography weight="300" size="12px" height="14px" >@Angelo_hervis</Typography>
        </Flex>
    </Flex>
    </C.Container>
}