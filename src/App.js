import React, {useContext} from "react";

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
import {ModelParametersContext, ModelParametersProvider} from "./contexts/ModelParametersContext";

function App() {
    const classes = useStyles();
    const [modelParameters, setModelParameters] = useContext(ModelParametersContext)

    const handlePredict = (responseData) => {
        console.log(responseData);
    }

    const flaskPredict = async () => {
        console.log(modelParameters);
        const response = await fetch(`${baseUrl}/predict`,
            {
                method:"POST",
                mode: 'no-cors',
                // credentials: 'same-origin', // include, *same-origin, omit
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
        setModelParameters({
            ...modelParameters,
            "text": event.target.value
        })

        flaskPredict().then(responseData => {
            handlePredict(responseData);
        });
    };

    return (
        <ModelParametersProvider>
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
                                  endAdornment: <InputAdornment position="start">
                                      <Search className={classes.btn} fontSize="default" />
                                  </InputAdornment>,
                              }}
                              value={modelParameters["text"]}
                              className={classes.input}
                              label="Search field"
                              type="search"
                              onFocus={handleSubmit}
                              variant="outlined" />
                        </Box>
                  </form>
              <ProTip />
              <Copyright />
              </Box>
            </Box>
        </ModelParametersProvider>
        );
}

export default App;
