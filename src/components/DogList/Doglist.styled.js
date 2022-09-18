import styled from "styled-components"


export const Wrapper = styled.main`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 70px;
    row-gap: 40px;
    column-gap: 60px;
`
// Search Action


export const SearchWrapper = styled.form`
    width: 100%;
    height: 94px;
    display: flex;
    font-size: 12px;
    font-weight: 500;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
`

export const SearchInput = styled.input`
    width: 35vw;
    height: 5.12vh;
    border: 1px solid lightgrey;
    border-right: none;
    background: white;
    outline: none;
    padding-left: 1rem;
    &::placeholder {
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        font-size: 16px;
        letter-spacing: 0.15px;
        /* identical to box height, or 171% */
        color: #a8a8a8;
        letter-spacing: 1px;
        /* Black / 300 */
    }
    border-radius: 2px 0 0 2px;
`

export const Button = styled.button`
    height: 5.12vh;
    outline: none;
    border: 1px solid lightgrey;
    border-radius: 0 2px 2px 0;
    border-left: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`