import {createMuiTheme} from '@material-ui/core'

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                
                backgroundColor: 'transparent',
            },
        },
    },
});



export default theme;