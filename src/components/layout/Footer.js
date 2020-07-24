import styled from 'styled-components';
import colors from '../../constants/colors'

const Footer = styled.footer`
  
  width: 100%;
  padding: 15px 0;
  background-color: ${colors.primary};
  font-size: 12px;
  line-height: 1.4em;
  border-radius: 10px;
  text-align: center;
  color: white;

  a {
    display: block;
    color: ${colors.darkerCyan};
    text-decoration: none;
  }

`;

export default Footer;