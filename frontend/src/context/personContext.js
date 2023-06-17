import {createContext, useReducer} from "react"

//THE ENTIRE POINT OF THIS CODE IS TO KEEP THE CHANGES UPDATED LOCALLY, SO THIS DOESNT EVEN TOUCH THE DATABASE. WE ARE JUST UPDATING THE DATA LOCALLY TO WHAT THE DATABASE ALREADY HAS.

export const personContext = createContext(); //Context is a global state for the components, we can update this state, so we want to update the personInfo state

export const personReducer = (state,action) => { //state is the previous value before the data changes are updated, action is the values we put in the dispatch function
    //check what is it we want to do (create, read, update, delete)
    switch(action.type){
        case "SET_PERSONER":
            return{
                personer: action.payload //when SET_PERSONER has been called, return this new state object which updates the state at line 24
            }
        case "CREATE_PERSON":
            return{
                personer: [action.payload, ...state.personer] //adding payload into an array and spreading it into a new array
            }
            case "DELETE_PERSON":
                return{
                    personer: state.personer.filter((p) => p._id !== action.payload._id)
                }
            default: //if none of the cases match, return no changes
                return state
    }
}

export const PersonContextProvider = ({children}) => { //make Context available everywhere else, using a Provider
    const [state, dispatch] = useReducer(personReducer, { //useReducer is similar to useState, 
                                    // 1 para is reducer name, 2 para is an initial value for state
        personer: null //this will change from null to whatever the payload from our action was
    })

  //  dispatch({type: "SET_PERSON", payload: [{}, {}]}) //if we want to update state, we use this function, describing in words what the change is.
                            // the second para is the data that has our changes
                                    
    return (
        <personContext.Provider value={{...state, dispatch}}> {/*Whatever needs the Context, will be wrapped in here, spreading the different properties in the state object*/}
                                        {/*if we want to use state and dispatch to update or read this data, put it in value*/}
            {children} {/* children is what the Provider has wrapped*/}
        </personContext.Provider>
    )
}