import {useState, useEffect} from "react";
import FolkList from "./FolkList"

const Home = () => {
    let oldTitle = "Main Content Component" // use {} to display it on JSX
    const [title, setTitle] = useState(oldTitle); // 1 para define the element inside useState with a name, 2 para is a function to use our element with

    const [folk, setFolks] = useState([
        {fornavn: "Per", etternavn: "Arne", perNr: 123, adresse: "Hakkebakkeskogen 1A"},
        {fornavn: "Arijus", etternavn: "Laurin", perNr: 321, adresse: "Hemmeligsted 32B"},
        {fornavn: "Mads", etternavn: "Mikkelsen", perNr: 999, adresse: "Legoland Gata 9C"}
    ])
    
    

    const handleClick = (name, e) => {
        console.log(`YEAAAH ${name} ${e.target}`);
        setTitle("Folkeregisteret Hjemmeside til " + name);
    }

    const handleDelete = (id) => {
        // this doesnt alter the original array, only creates a new one using our variable
        const newFolk = folk.filter(Folk => Folk.perNr !== id); //if perNr of Folk doesn't = id, add them to new Array
        setFolks(newFolk) // setFolks is the useState function that updates the values of folk
    }

    useEffect(() => {
        console.log("yuh");
    }, [folk]); // folk is a dependency, so useEffect only runs on intial load, and when folk is updated

    return (
        <div className="home">
        <h1>{ title }</h1>
        {/* I must wrap the function inside a anon function to refrain the function from auto firing on load */}
        <div className="buttondiv">
        <button onClick={(e) => {handleClick("Laurin", e)}}>Klikk her</button>
        </div>
        <h1>Registrert Folk</h1>
        {/* I make FolkList a component so if I want a component that goes through all my items in array and displays them, i can use the component */}
        {/* folk={folk} is a prop, same with handleDelete, that i send to FolkList.js so I can use the elements defined here in the JS file */}
        <FolkList folk={folk} handleDelete={handleDelete}/>
        <h1>Folk i "Laurin" Familien</h1>
        <FolkList folk={folk.filter((Folk) => Folk.etternavn === "Laurin")} handleDelete={handleDelete}/>
        </div>
     );
}

export default Home;