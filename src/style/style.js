import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 'auto'
    },
    neutral: {
        backgroundColor: "grey"
    },
    negative: {
        backgroundColor: "#F32013"
    },
    positive: {
        backgroundColor: "aqua"
    },
    predicted: {
        width: '100%',
        margin: '0%',
        color: "black",
        textAlign: "center",
        padding: "3px",
        borderRadius: "3px"
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