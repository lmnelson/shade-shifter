import Styled, { css } from "styled-components";

//---------------------------------------
// Scaffolding
//---------------------------------------

export const Wrapper = Styled.div`
max-width: 800px; 
margin: 0 auto; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = Styled.header`
  display: flex;
  justify-content: center;
  font-family: monospace;
  font-size: 23px;
  font-weight: 700;
  padding: 15px;
  color: #fff;
  /* border-bottom: 2px solid #000;  */
  margin-bottom: 15px;
  background: #000; 
  align-items: center;
`;
export const Content = Styled.div`
  flex-grow: 1;
`;
export const Footer = Styled.footer`
  padding: 15px 0; 
  font-size: 15px;
  text-align: center; 
  margin-top: 20px;
  a {
    margin: 0 10px; 
  }
`;

//---------------------------------------
// Form
//---------------------------------------

export const InputSpacing = css`
  margin: 0 8px;
`;
export const InputStyles = css`
  font-family: monospace;
  padding: 5px 10px;
  border: 2px solid #000;
  font-size: 16px;
  flex-grow: 1;
`;
export const Select = Styled.select`
  ${InputSpacing}
  ${InputStyles}
  position: relative; 
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff;
  background-position-x: 90%; 
  background-size: 12px;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
export const Input = Styled.input`
  ${InputSpacing}
  ${InputStyles}
`;
export const Button = Styled.button`
  ${InputSpacing}
  background: #fff; 
  border: 2px solid #000;
  color: #000; 
  padding: 10px 15px; 
  font-size: 16px; 
  font-family: monospace; 
  flex-shrink: 0;
  :hover {
    background: black; 
    color: white; 
  }
`;
export const FormGroup = Styled.div`
  display:flex; 
`;

//---------------------------------------
// Shades
//---------------------------------------

export const ColorShades = Styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column; 
  background-image: url(https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif);
  background-repeat: no-repeat; 
  background-size: cover; 
`;
export const ColorRow = Styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center; 
  margin-bottom: 0;  
`;
export const ColorShade = Styled.div`
  flex-grow: 1; 
  border-right: 6px solid white; 
  height: 40px;
`;
export const ColorHex = Styled.div`
  flex-basis: 120px; 
  padding: 0 10px; 
  flex-shrink: 0;
  flex-grow: 0;
  background: #fff; 
`;
export const ColorName = Styled.div`
  justify-content: flex-start;
  flex-basis: 70px;
  text-align: center;
  background: #fff;
`;
