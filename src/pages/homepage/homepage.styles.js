import Directory from '../../components/directory/directory.component';

import styled from 'styled-components';

const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`;

export const HomePageContainer = () => (
    <Home>
        <Directory />
    </Home>
);
