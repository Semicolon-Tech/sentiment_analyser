import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 'auto'
    },
    box: {
        width: '75%',
        margin: '10% auto',
    },
    btn: {
      cursor: 'pointer',
        color: 'blue'
    },
    form: {
        display: 'flex',
        margin: 'auto',
        width: '100%'
    },
    input: {
        margin: '0%',
        width: '100%',
        border: 'none',
        height: '100px'
    },
}))

export default  useStyles;