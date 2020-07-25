import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  show: boolean;
}

// ${(props) =>
//   props.show &&
//   css`
//     left: -200px;
//   `}

// ${(props) =>
//   !props.show &&
//   css`
//     left: 0px;
//   `}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  width: 200px;
  height: 100%;
  box-shadow: 1px 1px #c9c9c9;
  position: fixed;
  z-index: 200;
  left: -200px;

  ${(props) =>
    props.show &&
    css`
      left: 0px;
    `}
`;

export const Content = styled.div`
  nav {
    ul {
      position: fixed;

      display: flex;
      flex-direction: column;
      list-style-type: none;

      li {
        button {
          width: 178px;

          margin: 12px;

          display: flex;
          align-items: center;
          background: transparent;
          border: 0;

          span {
            margin-left: 5px;
            font-size: 14px;
          }
        }

        &:hover {
          background: ${shade(0.2, '#d84e55')};
        }
      }
    }
  }
`;
