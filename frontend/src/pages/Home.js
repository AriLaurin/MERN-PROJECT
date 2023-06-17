// import {useEffect, useState} from "react";
import {useEffect} from "react";
import {usePersonContext} from "../hooks/usePersonContext";

import PersonInfo from "../components/PersonInfo";
import PersonForm from "../components/PersonForm";


const Home = () => {

    //instead of defining a useState for personer to store our data, we use the Context to store it globally
    // const [personer, setPersoner] = useState(null) //Personer now contains our mongodb data
    const {personer, dispatch} = usePersonContext() //personer is null to begin with because we defined state as null

    useEffect(() => { //UseEffect runs something when something loads
        const fetchPersoner = async () => {
            const response = await fetch("/load") //fetches data, stores response in the const variable
            const json = await response.json() //parses the json, puts it into an array of objects in json variable

            if(response.ok){
                // setPersoner(json)
                //update personer with fetched data, we use dispatch fire the PersonReducer function found in personContext
                dispatch({type:"SET_PERSONER", payload: json}) //the action from PersonReducer is this dispatch function, that sets type and has a payload with our data
            }

        }

        fetchPersoner()
    }, [dispatch]) //empty array is a param we can say so UseEffect only runs once, with Dispatch in here, it will also run when dispatch is used


    return (
        <div className="home">
            <div className="personer">
                {personer && personer.map((Folk) => ( // if personer doesnt have any value, don't map it
                    <PersonInfo key={Folk._id} Folk={Folk}/> //We make Folk available to the component
                ))}
            </div>
            <PersonForm/>
        </div>
    ) 
}

export default Home;