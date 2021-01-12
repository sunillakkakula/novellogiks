import { createMuiTheme } from "@material-ui/core/styles";

const nlBlue = "#0B72B9";
const nlOrange = "#FFBA60";
const nlGray = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: nlBlue,
      orange: nlOrange,
    },
    primary: {
      main: nlBlue,
    },
    secondary: {
      main: nlOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: nlBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: nlBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: nlBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: nlBlue,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: nlGray,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: nlGray,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: nlGray,
    },
    learnButton: {
      borderColor: nlBlue,
      borderWidth: 2,
      textTransform: "none",
      color: nlBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: nlBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: nlGray,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${nlBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${nlBlue}`,
        },
      },
    },
  },
});
