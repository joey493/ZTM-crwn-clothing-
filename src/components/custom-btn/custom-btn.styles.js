import styled, { css } from 'styled-components';

const googleBtn = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #fff;
        color: #4285f4;
        border: 1px solid #4285f4;
    }
`;

const invertedBtn = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const defualtBtn = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const getBtnStyles = (props) => {
    if (props.isGoogleSignIn === true) {
        return googleBtn;
    }

    return props.inverted ? invertedBtn : defualtBtn;
};

const CustomBtnContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getBtnStyles}
`;

export { CustomBtnContainer };
