import {useState} from "react"
import {usePersonContext} from "../hooks/usePersonContext";

const PersonForm = () => {
    const {dispatch} = usePersonContext()

    const [fornavn, setFornavn] = useState("")
    const [etternavn, setEtternavn] = useState("")
    const [perNr, setPerNr] = useState("")
    const [adresse, setAdresse] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const person = {fornavn, etternavn, perNr, adresse} //we make a dummy object to store our data from the form in one place.

        const response = await fetch("/create", {
            method: "POST",
            body: JSON.stringify(person),
            headers: {"Content-Type": "application/json"}
        })
        const json = await response.json()
        // console.log("fetched", json);

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){ //if post is successfull, clear out form field
            setFornavn("")
            setEtternavn("")
            setPerNr("")
            setAdresse("")
            setError(null)
            setEmptyFields([])
            console.log("Ny person har blitt registrert", json);
            dispatch({type: "CREATE_PERSON", payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Registrer en ny person</h3>

            <label>Fornavn</label>
            <input type="text" onChange={(e => setFornavn(e.target.value))} value={fornavn} className={emptyFields.includes("fornavn") ? "error" : ""} ></input> {/*When user writes something, onChange fires setFornavn, if value is changed elsewhere, update it*/}
            <label>Etternavn</label>
            <input type="text" onChange={(e => setEtternavn(e.target.value))} value={etternavn} className={emptyFields.includes("etternavn") ? "error" : ""}></input>
            <label>Personnummer</label>
            <input type="number" onChange={(e => setPerNr(e.target.value))} value={perNr} className={emptyFields.includes("perNr") ? "error" : ""}></input>
            <label>Adresse</label>
            <input type="text" onChange={(e => setAdresse(e.target.value))} value={adresse} className={emptyFields.includes("adresse") ? "error" : ""}></input>
            <button>Registrer Person</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PersonForm