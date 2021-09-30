import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
`;

export const SelectBar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const SelectLangBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const SelectThemeBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & label {
    padding: 0 20px;
  }
`;

export const DiamondIcon = styled.button`
  height: 30px;
  width: 30px;
  border: 2px solid transparent;
  background-image: linear-gradient(
    45deg,
    rgba(1, 215, 49, 1) 1%,
    rgba(0, 80, 154, 1) 100%
  );
  background-origin: border-box;
  background-clip: border-box;
  -webkit-background-clip: border-box;
  -moz-background-clip: border-box;
  box-shadow: 0px 1000px 0px ${({ theme }) => theme.text} inset;
  cursor: pointer;
  transform: rotate(225deg);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg);
  }
`;
