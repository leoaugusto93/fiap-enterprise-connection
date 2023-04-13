import styled from "styled-components";
import {
    Colors,
    Spaces,
    Shadows,
} from "../../shared/DesignTokens";
import esgLogo from "../../assets/images/esg-logo.png";

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    margin-bottom: ${Spaces.FIVE};
    padding: ${Spaces.ONE};
    background-color: ${Colors.NAVBAR_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${Shadows.ONE};

    @media (min-width: 1024px) {
        height: 90px;
        padding: ${Spaces.TWO};
        margin-bottom: ${Spaces.EIGHT};
    }
`;

const Logo = styled.img.attrs({
    src: esgLogo,
    alt: 'Logo de "ESG"'
})`
    height: 100%
`;

export default function Header() {
    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    );
}