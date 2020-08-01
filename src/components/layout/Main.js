import styled from 'styled-components';



const Main = styled.main`
  margin-top: ${props => props.filter ? '90px' : '0'};
  padding: 50px 30px;

  @media screen and (min-width: 768px){
    width: 80%;
    margin: 20px auto;
  }
`

export default Main;