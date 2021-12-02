import styled from "styled-components";

export const PlayerWrapper = styled.div`
    .content {
        background: url(${require("@/assets/img/wrap-bg.png")}) repeat-y;
        background-color: #fff;
        display: flex;
        border: 1px solid #d3d3d3;
        border-bottom: none;
    }
`
export const PlayerLeft = styled.div`
    width: 710px;
`
export const PlayerRight = styled.div`
    width: 270px;
    padding: 20px 40px 40px 30px;
`