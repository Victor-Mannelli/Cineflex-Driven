import styled from "styled-components"
import React from 'react';

export default function ReceiptPage(){
    return (
        <StyledReceiptPage>
            <H1div>
                <h1> Pedido feito com sucesso </h1>
            </H1div>
        </StyledReceiptPage>
    )
}
const StyledReceiptPage = styled.div `
    h1 {
        text-align: center;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
`
const H1div = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 110px;
    width: 100%;
`