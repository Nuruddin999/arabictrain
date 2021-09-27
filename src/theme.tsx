import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#1ba94c',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e7eeef;',
    },
    
    warning:{
      main:"#fff59d"
    }
  },

});

export default theme;
