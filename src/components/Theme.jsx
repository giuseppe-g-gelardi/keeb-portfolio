import { createTheme } from '@material-ui/core'

const baseTheme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',
    primary: {
      main: '#c792ea',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#c792ea',
    },
  },
});

export { lightTheme, darkTheme }
