import React, {useContext, useState} from "react";

import Box from "@material-ui/core/Box";
import  {Search} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";

import ProTip from "./components/ProTip";
import Copyright from "./components/Copyright";
import ModelOptions from "./components/ModelOptions";

import {baseUrl} from "./utils/constants";
import useStyles from "./style/style";
import {ModelParametersContext} from "./contexts/ModelParametersContext";

function App() {
    const classes = useStyles();
    const [bgColor, setBgColor] = useState(classes.neutral);
    const [predictedText, setPredictedText] = useState("...");
    const [modelParameters, setModelParameters] = useContext(ModelParametersContext)

    const bgColors = {
        "positive": classes.positive,
        "negative": classes.negative,
        "neutral": classes.neutral
    }

    const handlePrediction = (responseData) => {
        setPredictedText(modelParameters["text"])
        setBgColor(bgColors[responseData["output"]]);
    }

    const flaskPredict = async () => {
        console.log(JSON.stringify(modelParameters));
        const response = await fetch(`${baseUrl}/predict`,
            {
                method:"POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(modelParameters)
            }
        );

        const responseData = await response.json();
        return responseData;
    }

    const handleSubmit = event => {
        event.preventDefault();
        setPredictedText("... Loading ...");
        setBgColor(classes.neutral);

        flaskPredict().then(responseData => {
            handlePrediction(responseData);
        });
    };

    const handleChange = event => {
        setModelParameters({
            ...modelParameters,
            "text": event.target.value
        })

    };

    return (
        <Box className={classes.root}>
            <Box className={classes.box}>
                <Typography variant="h4" align="center" component="h1" gutterBottom>
                  Create React App v4-beta example
                </Typography>

                <form noValidate autoComplete="off">
                    <Box className={classes.form}>
                        <ModelOptions />
                    </Box>

                    <Box className={classes.form}>
                      <TextField
                          id="outlined-search"
                          InputProps={{
                              endAdornment: <InputAdornment position="start" onClick={handleSubmit}>
                                  <Search className={classes.btn} fontSize="default" />
                              </InputAdornment>,
                          }}
                          defaultValue={modelParameters["text"]}
                          className={classes.input}
                          label="Search field"
                          type="search"
                          required={true}
                          onChange={handleChange}
                          variant="outlined" />
                    </Box>
                    <Box className={`${classes.predicted} ${bgColor}`}>
                        {predictedText}
                    </Box>
              </form>
          <ProTip />
          <Copyright />
          </Box>
        </Box>
        );
}

export default App;
