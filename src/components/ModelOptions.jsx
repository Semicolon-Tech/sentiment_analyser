import React, {useState} from "react";
import Dropdown from "./Dropdown";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    modal: {
        marginBottom: '30px',
        width: '100%',
        margin: '0%',
        display: 'flex',

        justifyContent: 'space-between',
    },
}));

function ModelOptions() {
    const classes = useStyles();
    const [modelOptions] = useState({
        "Multinomial": "multinomial",
        "Bernoulli": "bernoulli",
        "Categorical": "categorical",
        "Gaussian": "gaussian",
        "Complement": "complement"
    });

    const [vectorizerOptions] = useState({
        "TFIDF": "tfidf",
        "Count": "count"
    });

    return (
        <Box className={classes.modal}>
             <Dropdown name={"model"} options={modelOptions}/>
             <Dropdown name={"vectorizer"} options={vectorizerOptions}/>
        </Box>
    )
}
export default ModelOptions;