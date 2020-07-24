import styled from 'styled-components'
import colors from '../../constants/colors'

const Header = styled.header`
  width: 100%;
  height: 150px;
  background-image: url('./images/bg-header-mobile.svg');
  background-size: cover;
  background-color: ${colors.primary}
`

export default Header;