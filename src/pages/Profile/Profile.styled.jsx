import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    padding: 40px 20px;
    margin: 0 auto;

    @media(min-width: 768px){
        width: 768px;
        padding: 60px 33px;
    }

    @media(min-width: 1280px){
        width: 1280px;
        padding: 60px 16px;
    }
`