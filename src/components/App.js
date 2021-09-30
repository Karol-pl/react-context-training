import React, { Component } from "react";
import LangContext from "../contexts/LangContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "../theme/Theme";
import Flags from "country-flag-icons/react/3x2";
import {
  AppContainer,
  DiamondIcon,
  SelectBar,
  SelectLangBar,
  SelectThemeBar,
} from "./App.style";
import UserCreate from "./UserCreate";

class App extends Component {
  state = {
    themeLight: true,
    themeDark: false,
    language: "english",
  };

  toggleTheme = () => {
    this.setState({
      themeLight: !this.state.themeLight,
      themeDark: !this.state.themeDark,
    });
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    const flagStyle = {
      width: "60px",
      height: "60px",
      padding: "10px",
      cursor: "pointer",
    };
    return (
      <ThemeProvider theme={this.state.themeLight ? lightTheme : darkTheme}>
        <>
          <GlobalStyle />
          <AppContainer>
            <SelectBar>
              <SelectLangBar>
                Select a language:
                <Flags.US
                  style={flagStyle}
                  title="United States"
                  onClick={() => this.onLanguageChange("english")}
                />
                <Flags.NL
                  style={flagStyle}
                  title="Netherlands"
                  onClick={() => this.onLanguageChange("dutch")}
                />
              </SelectLangBar>
              <SelectThemeBar>
                <label>Theme: </label>
                <DiamondIcon onClick={() => this.toggleTheme()}></DiamondIcon>
              </SelectThemeBar>
            </SelectBar>
            <LangContext.Provider value={this.state.language}>
              <UserCreate />
            </LangContext.Provider>
          </AppContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
