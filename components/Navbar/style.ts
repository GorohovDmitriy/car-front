import styled from "styled-components";

export const Container = styled.div<{ show?: boolean }>`
  width: 100%;
  position: fixed;
  opacity: 1;
  z-index: 100;
  padding: 5px 20px;
  background-color: ${(props) => (props.show ? "#fff" : "")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const Logo = styled.div`
  position: relative;
  left: -11px;
  cursor: pointer;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: #171515;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }

  @media (max-width: 550px) {
    font-size: 10px;
    padding: 5px 10px;
  }

  @media (max-width: 350px) {
    font-size: 8px;
    padding: 3px 5px;
    border-radius: 5px;
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #171515;
  border-radius: 10px;
  color: white;
  font-size: 22px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }

  @media (max-width: 550px) {
    font-size: 15px;
    padding: 5px 10px;
  }

  @media (max-width: 350px) {
    font-size: 11px;
    padding: 3px 5px;
    border-radius: 5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
