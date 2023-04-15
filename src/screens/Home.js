import styled from 'styled-components';
import UserCard from '../components/UserCard/UserCard';
import {
    Box, Flex
} from 'reflexbox';
import { Spaces } from '../shared/DesignTokens';
import SearchField from '../common-components/SearchField/SearchField';
import Button from '../common-components/Button/Button';
import avatarDouglas from "../assets/images/douglas.jpg";
import avatarErnesto from "../assets/images/ernesto.jpg";
import avatarGuilerme from "../assets/images/guilherme.jpg";
import avatarItalo from "../assets/images/italo.jpg";
import avatarLeonardo from "../assets/images/leonardo.png";

const UserGrid = styled(Box)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Spaces.ONE_HALF};

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: ${Spaces.TWO};
    }
`;

export default function Home() {
    return (
        <>
            <Flex
                width={['100%', '600px']}
                mx={[Spaces.NONE, 'auto']}
                mt={[Spaces.THREE, Spaces.FIVE]}
                px={[Spaces.ONE, Spaces.NONE]}
                mb={[Spaces.TWO, Spaces.FOUR]}
            >
                <Box flexGrow="1">
                    <SearchField placeholder="Pesquisar..."></SearchField>
                </Box>
                <Box ml={Spaces.TWO}>
                    <Button>Buscar</Button>
                </Box>
            </Flex>
            <UserGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
                <UserCard
                    name="Douglas Jorge Vizzacchi"
                    phone="(11) 91111 - 1111"
                    email="email@email.com.br"
                    cep="04094050"
                    picture={avatarDouglas}
                />
                <UserCard
                    name="Ernesto De Oliveira"
                    phone="(11) 91111 - 1111"
                    email="email@email.com.br"
                    cep="05303020"
                    picture={avatarErnesto}
                />
                <UserCard
                    name="Guilherme Ribas"
                    phone="(11) 91111 - 1111"
                    email="email@email.com.br"
                    cep="05144085"
                    picture={avatarGuilerme}
                />
                <UserCard
                    name="Ítalo Santos"
                    phone="(11) 91111 - 1111"
                    email="email@email.com.br"
                    cep="01001000"
                    picture={avatarItalo}
                />
                <UserCard
                    name="Leonardo Augusto"
                    phone="(11) 91111 - 1111"
                    email="email@email.com.br"
                    cep="02510030"
                    picture={avatarLeonardo}
                />
            </UserGrid>
        </>
    );
}