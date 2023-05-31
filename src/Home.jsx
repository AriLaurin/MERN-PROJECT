import {useState} from "react";

const Home = () => {
    let oldTitle = "Main Content Component" // use {} to display it on JSX
    const [title, setTitle] = useState(oldTitle); // 1 para define the element inside useState with a name, 2 para is a function to use our element with
    const handleClick = (name, e) => {
        console.log(`YEAAAH ${name} ${e.target}`);
        setTitle("Folkeregisteret Hjemmeside til " + name);
    }

    return (
        <div className="home">
        <h1>{ title }</h1>
        {/* I must wrap the function inside a anon function to refrain the function from auto firing on load */}
        <button onClick={(e) => {handleClick("Laurin", e)}}>Klikk her</button> 
        </div>
     );
}
 
export default Home;