const PersonInfo = ({Folk}) => {

    return(
        <div className="person-detaljer">
            <h4>{Folk.fornavn} {Folk.etternavn}</h4>
            <p><strong>Adresse </strong>{Folk.adresse}</p>
            <p><strong>Personnummer </strong>{Folk.perNr}</p>
            <p>Registrert {Folk.createdAt}</p>
        </div>
    )
}

export default PersonInfo