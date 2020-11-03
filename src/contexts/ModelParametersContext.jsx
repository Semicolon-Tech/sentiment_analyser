import React, {createContext, useState} from "react";

const initialModelParameters = {
    "text": "do no evil",
    "model": "categorical",
    "vectorizer": "count"
}

export const ModelParametersContext = createContext([
    initialModelParameters,
    (modelParameters) => {}
]);

export const ModelParametersProvider = props => {
    const [modelParameters, setModelParameters] = useState(initialModelParameters)

    return (
        <ModelParametersContext.Provider value={[modelParameters, setModelParameters]}>
            {props.children}
        </ModelParametersContext.Provider>
    )
}