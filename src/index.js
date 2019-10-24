import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import {
  Wrapper,
  Header,
  Footer,
  Content,
  Select,
  Input,
  Button,
  FormGroup,
  ColorShades,
  ColorShade,
  ColorRow,
  ColorHex,
  ColorName
} from "./styledComponents";
import { darken, lighten, rgba } from "polished";

import "./styles.css";

const colorFunctionsMap = [
  { id: 1, name: "lighten" },
  { id: 2, name: "darken" },
  { id: 3, name: "opacify" }
];

class App extends React.Component {
  state = {
    shadeCount: 10,
    colorCode: null,
    colorFunction: 1,
    shades: []
  };

  handleHexChange = event => {
    this.setState({
      colorCode: event.target.value
    });
  };
  handleColorFuncChange = event => {
    this.setState({
      colorFunction: event.target.value
    });
  };
  handleColorFunction = () => {
    switch (parseInt(this.state.colorFunction, 10)) {
      case parseInt(colorFunctionsMap[0].id, 10):
        this.lighten();
        break;
      case parseInt(colorFunctionsMap[1].id, 10):
        this.darken();
        break;
      case parseInt(colorFunctionsMap[2].id, 10):
        this.opacify();
        break;
      default:
        console.log("foo");
    }
  };

  lighten = () => {
    let newShades = [];
    for (let i = 0; i < this.state.shadeCount; i++) {
      newShades.push({
        name: `${i}00`,
        colorValue: lighten(`0.${i}`, this.state.colorCode)
      });
    }
    this.setState({
      shades: [...newShades]
    });
    console.log("lighten");
  };

  darken = () => {
    let newShades = [];
    for (let i = 0; i < this.state.shadeCount; i++) {
      newShades.push({
        name: `${i}00`,
        colorValue: darken(`0.${i}`, this.state.colorCode)
      });
    }
    this.setState({
      shades: [...newShades]
    });
    console.log("darken");
  };

  opacify = () => {
    let newShades = [];
    for (let i = 0; i < this.state.shadeCount; i++) {
      newShades.push({
        name: `${i}00`,
        colorValue: rgba(this.state.colorCode, i / 10)
      });
    }
    this.setState({
      shades: [...newShades]
    });
    console.log("opacify");
  };

  render() {
    let shades = this.state.shades;
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Shade Shifter</title>
          <link
            rel="icon"
            type="image/png"
            href="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f3f3-1f308.png"
          ></link>
          <meta
            name="description"
            content="A Visual UI for Polished JS so designers and developers can stay in-sync"
          />
        </Helmet>
        <Wrapper>
          <Header>
            <span role="img" aria-label="rainbow">
              🏳️‍🌈
            </span>
            <span>Shade Shifter</span>
          </Header>
          <Content>
            <FormGroup>
              <Input
                type="text"
                onChange={this.handleHexChange}
                placeholder="HEX Code"
              />
              <Input type="number" min="1" max="30" value="10" disabled />
              <Select onChange={this.handleColorFuncChange}>
                <option value="1">Lighten</option>
                <option value="2">Darken</option>
                <option value="3">Opacify</option>
              </Select>
              <Button onClick={this.handleColorFunction}>
                Create Color Shades
              </Button>
            </FormGroup>
            <ColorShades>
              {shades.map((value, index) => {
                return (
                  <ColorRow key={index}>
                    <ColorName>{value.name}</ColorName>
                    <ColorShade style={{ background: value.colorValue }} />
                    <ColorHex>{value.colorValue}</ColorHex>
                  </ColorRow>
                );
              })}
            </ColorShades>
          </Content>
          <Footer>
            <div>
              <a href="https://www.linkedin.com/in/leemnelson/" target="_blank">
                Lee Nelson
              </a>
              <a href="https://github.com/lmnelson/shade-shifter">
                Source Code
              </a>
            </div>
            <div>
              A visual UI for{" "}
              <a href="https://polished.js.org">✨Polished JS</a>
            </div>
          </Footer>
        </Wrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
