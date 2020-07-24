import styled from 'styled-components'
import colors from '../../constants/colors';

const Badge = styled.span`
      margin-right: 5px;
      color: ${colors.text};
      background-color: ${props => props.background};
      padding: 5px;
      border-radius: 20px;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
`

export default Badge;