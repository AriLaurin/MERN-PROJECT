const FolkList = ({folk, handleDelete}) => {
    // const folk = props.folk
    return ( 
        <div className="folk-container">
        {/* .map goes through each item in array */}
    {folk.map((Folk) => (
        <div className="folk-preview" key={Folk.perNr}>
            <h2>{`${Folk.fornavn} ${Folk.etternavn}`}</h2>
            <button onClick={() => handleDelete(Folk.perNr)}>Slett Person</button>
        </div>
    ))}
    </div>
     );
}
 
export default FolkList;