import styled from "styled-components";
import colors from "../../constants/colors";

const JobItemContainer = styled.div`
  position: relative;
  padding: 20px 20px 10px;
  margin-bottom: 40px;
  background-color: white;
  border-radius: 5px;
  border-left: 7px solid ${colors.primary};
  box-shadow: 0px 10px 12px -6px hsla(180, 29%, 50%, 0.3);

  img {
    width: 50px;
    position: absolute;
    top: -23px;
    left: 15px;
  }

  .job-item {
    &__title {
      display: flex;
      align-items: center;
      margin: 15px 0 10px;

      h5 {
        margin: 0;
        color: ${colors.primary};
        font-size: 12px;
        margin-right: 10px;
      }
    }

    &__data {
      h3 {
        margin: 5px 0 10px;
        color: ${colors.darkerCyan};
        font-size: 1em;
      }

      div {
        display: flex;
        padding: 0;
        margin: 15px 0;
        color: ${colors.darkCyan};
        font-size: 0.9em;

        span {
          margin-right: 5px;
        }
      }

      
    }

    &__requirements {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px solid ${colors.darkCyan};
      padding-top: 5px;
    }
  }
`;

export default JobItemContainer;
