import styled from "styled-components";
import {
    Colors,
    Spaces,
} from "../../shared/DesignTokens";

const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    margin-bottom: ${Spaces.FIVE};
    padding: ${Spaces.ONE};
    background-color: ${Colors.NAVBAR_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
        height: 90px;
        padding: ${Spaces.TWO};
        margin-bottom: ${Spaces.ONE};
    }
`;

const Logo = styled.h1`
    color: ${Colors.NEUTRAL_BLACK};
`;

export default function Header() {
    return (
        <Wrapper>
            <Logo>Entrerprise Connection</Logo>
        </Wrapper>
    );
}