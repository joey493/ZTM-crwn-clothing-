import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

const Options = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Option = styled(Link)`
    font-size: 1.2rem;
    padding: 10px 15px;
    cursor: pointer;
`;

export { HeaderContainer, LogoContainer, Options, Option };
