import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; //to proper use rem units
  }
  html, body, #__next {
    height: 100%; //this is not a reset
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles

// <React.Fragment>
//   <GlobalStyle whiteColor />
//   <Navigation /> {/* example of other top-level stuff */}
// </React.Fragment>
