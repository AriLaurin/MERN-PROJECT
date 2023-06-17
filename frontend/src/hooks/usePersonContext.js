import {personContext} from "../context/personContext"
import {useContext} from "react"

export const usePersonContext = () => {
    const context = useContext(personContext) //PersonContext is the value we brought from Provider

    //Check if we are in the scope of the Context we want to use
    if(!context){
        throw Error("Context must be used inside a ContextProvider")
    }

    return context //everytime we want to use Person Data, invoke useContext, to get that context value
}