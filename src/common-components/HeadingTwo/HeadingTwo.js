import styled from "styled-components";
import {
    Colors,
    FontFamilies,
    FontLineHeights,
    FontSizes,
    FontWeights,
} from '../../shared/DesignTokens';

export const HeadingTwo = styled.h2`
	margin: 0;
	padding: 0;
    font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.BOLD};
	line-height: ${FontLineHeights.MEDIUM};
	font-size: ${FontSizes.TWO};
	color: ${Colors.YELLOW_200};
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;