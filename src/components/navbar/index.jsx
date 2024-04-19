import {BsSun} from "react-icons/bs";
import {BiMoon} from "react-icons/bi";
import {Typography} from "../../style";
import {Spacer} from "../../style";
import LogoInstagram from "../../assets/logo-instagram.svg";
import * as C from "./style";
import { Flex } from "../../style";

export function NavBar({themeToggler, theme}) {
    function GroupText({title, subTitle}) {
        return (
            <Flex gap="4px">
                <Typography>{title}</Typography>
                <Typography weight="300" size="12px" height="14px">{subTitle}</Typography>
            </Flex>
        );
    }

    return (
    <C.Container>
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

        <GroupText title = "Angelo Hervis" subTitle = "@Angelo_hervis"/>
    </Flex>

    <Spacer margin="8px"/>

    <Flex direction="row" justify="space-between">
        <GroupText title = "100" subTitle = "Publicações"/>
        <GroupText title = "1627" subTitle = "Seguidores"/>
        <GroupText title = "500" subTitle = "Seguindo"/>
    </Flex>
    </C.Container>
    );
}