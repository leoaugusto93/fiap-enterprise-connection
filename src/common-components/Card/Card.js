import styled from "styled-components";
import {
    BorderRadiuses,
    Colors,
} from "../../shared/DesignTokens";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Colors.CARD_COLOR};
    border-radius: ${BorderRadiuses.TWO};
`;

export default Card;