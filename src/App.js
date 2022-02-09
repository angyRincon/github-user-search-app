import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card/Card";

const url = 'https://api.github.com/users';

function App() {
    const [lightMode, setLightMode] = useState(true)
    const [username, setUserName] = useState('')
    const [user, setUser] = useState({})

    const getUserDefault = async () => {
        const {data} = await axios.get(`${url}/octocat`)
        setUser(data)
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const {data} = await axios.get(`${url}/${username}`);
            setUser(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleToggle = () => {
        if (lightMode) document.body.classList.add('light-mode');
        else document.body.classList.remove('light-mode');
        setLightMode(!lightMode)
    }

    useEffect(() => {
        getUserDefault();
    }, []);

    return (
        <div className="container">
            <Header
                lightMode={lightMode}
                handleToggle={handleToggle}
            />

            <Search
                handleSubmit={handleSubmit}
                setUserName={setUserName}
            />

            <Card user={user} />

        </div>
    );
}

export default App;
