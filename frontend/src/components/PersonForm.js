import {useState} from "react"
import {usePersonContext} from "../hooks/usePersonContext";

const PersonForm = () => {
    const {dispatch} = usePersonContext()

    const [fornavn, setFornavn] = useState("")
    const [etternavn, setEtternavn] = useState("")
    const [perNr, setPerNr] = useState("")
    const [adresse, setAdresse] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const person = {fornavn, etternavn, perNr, adresse} //we make a dummy object to store our data from the form in one place.

        const response = await fetch("/create", {
            method: "POST",
            body: JSON.stringify(person),
            headers: {"Content-Type": "application/json"}
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){ //if post is successfull, clear out form field
            setFornavn("")
            setEtternavn("")
            setPerNr("")
            setAdresse("")
            setError(null)
            console.log("Ny person har blitt registrert", json);
            dispatch({type: "CREATE_PERSON", payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Registrer en ny person</h3>

            <label>Fornavn</label>
            <input type="text" onChange={(e => setFornavn(e.target.value))} value={fornavn}></input> {/*When user writes something, onChange fires setFornavn, if value is changed elsewhere, update it*/}
            <label>Etternavn</label>
            <input type="text" onChange={(e => setEtternavn(e.target.value))} value={etternavn}></input>
            <label>Personnummer</label>
            <input type="number" onChange={(e => setPerNr(e.target.value))} value={perNr}></input>
            <label>Adresse</label>
            <input type="text" onChange={(e => setAdresse(e.target.value))} value={adresse}></input>
            <button>Registrer Person</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PersonForm