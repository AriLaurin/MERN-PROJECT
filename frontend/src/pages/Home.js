import {useEffect, useState} from "react"

const Home = () => {

    const [personer, setPersoner] = useState(null)

    useEffect(() => { //UseEffect runs something when something loads
        const fetchPersoner = async () => {
            const response = await fetch("/load") //fetches data, stores response in the const variable
            const json = await response.json() //parses the json, puts it into an array of objects in json variable

            if(response.ok){
                setPersoner(json)
            }

        }

        fetchPersoner()
    }, []) //empty array is a param we can say so UseEffect only runs once

    return (
        <div className="home">
            <div className="personer">
                {personer && personer.map((Folk) => ( // if personer doesnt have any value, don't map it
                    <p key={Folk._id}>{Folk.fornavn}</p>
                ))}
            </div>
        </div>
    ) 
}

export default Home;