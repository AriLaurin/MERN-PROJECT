import { usePersonContext } from "../hooks/usePersonContext"

import formatDistanceToNow from "date-fns/formatDistanceToNow"

const PersonInfo = ({Folk}) => {
    const {dispatch} = usePersonContext()

    const handleClick = async () => {
        const response = await fetch ("/" + Folk._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if(response.ok){
            //update the state using dispatch
            console.log("deleted");
            dispatch({type:"DELETE_PERSON", payload: json})
        }
    }

    return(
        <div className="person-detaljer">
            <h4>{Folk.fornavn} {Folk.etternavn}</h4>
            <p><strong>Adresse </strong>{Folk.adresse}</p>
            <p><strong>Personnummer </strong>{Folk.perNr}</p>
            <p>Registrert {formatDistanceToNow(new Date(Folk.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default PersonInfo