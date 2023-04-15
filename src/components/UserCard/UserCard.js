import styled from 'styled-components';
import Card from '../../common-components/Card/Card';
import { Box } from 'reflexbox';
import { BorderRadiuses, Colors, Shadows, Spaces } from '../../shared/DesignTokens';
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo';
import { Description } from '../../common-components/Description/Description';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import React from 'react';

const InformationGrid = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 70px;
    gar: ${Spaces.TWO};
`;

const UserAvatar = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: ${Shadows.ONE};
    border-radius: ${BorderRadiuses.ONE};
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default function UserCard({name, phone, email, cep, picture}) {

    //API - VIA CEP
    function searchCep() {
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            alert(data.logradouro + ' - ' + data.bairro + ', ' + data.localidade + ', ' + data.cep);
        });
    }

    //CARDS
    return <Card>
        <InformationGrid p={Spaces.TWO}>
            <Box>
                <Box mb={Spaces.ONE}>
                    <HeadingTwo>{name}</HeadingTwo>
                </Box>
                <Description as="div" color={Colors.GRAY_700}>
                    <strong>Telefone:</strong> {phone}
                </Description>
                <Description as="div" color={Colors.GRAY_700}>
                    <strong>E-mail:</strong> {email}
                </Description>
                <Description as="div" color={Colors.GRAY_700}>
                    <strong>CEP:</strong> {cep}
                </Description>
            </Box>
            <UserAvatar src={picture} />
        </InformationGrid>
        <Box
            width="100%"
            mb="1rem"
        >
            <ButtonLink onClick={searchCep}>Ver endereço</ButtonLink>
        </Box>
    </Card>
}