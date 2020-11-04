import React, {createContext, useState} from "react";

export const ModelParametersContext = createContext();

export const ModelParametersProvider = props => {
    const [modelParameters, setModelParameters] = useState({
        "text": "do no evil",
        "model": "categorical",
        "vectorizer": "count"
    })

    return (
        <ModelParametersContext.Provider value={[modelParameters, setModelParameters]}>
            {props.children}
        </ModelParametersContext.Provider>
    )
}