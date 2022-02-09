import {useState} from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card/Card";

function App() {
    const [lightMode, setLightMode] = useState(true)

    const handleToggle = () => {
        if (lightMode) document.body.classList.add('light-mode');
        else document.body.classList.remove('light-mode');
        setLightMode(!lightMode)
    }

    return (
        <div className="container">
            <Header
                lightMode={lightMode}
                handleToggle={handleToggle}
            />

            <Search/>

            <Card/>

        </div>
    );
}

export default App;
