import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:1px solid var(--lightBlue);
border-radius:4px;
color:var(--mainYellow);
cursor:pointer;
transition:all .5s;
&:hover{
    background:var(--lightBlue);
    border-color:orangered;
}
&:focus{
    outline:none;
}
`