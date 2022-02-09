import {useState} from "react";

function App() {

    const [lightMode, setLightMode] = useState(true)

    const handleToggle = () => {
        if (lightMode) document.body.classList.add('light-mode');
        else document.body.classList.remove('light-mode');
        setLightMode(!lightMode)
    }
    console.log(lightMode)

    return (
        <div className="container">
            <div className="header">
                <h4>devfinder</h4>
                <button onClick={handleToggle}>
                    <span>{!lightMode ? 'dark' : 'light'}</span>
                    <i className={!lightMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}/>
                </button>
            </div>

            <div className='search'>
                <i className="fa-solid fa-magnifying-glass"/>
                <input
                    type="text"
                    placeholder='Search GitHub username...'
                />

                <button>search</button>
            </div>

            <div className="card">
                <div className='box'>
                    <img
                        src={"assets/octocat.png"}
                        alt="octocat"/>
                </div>

                <div className='box'>

                    <div className='title'>
                        <h3>The Octocat</h3>
                        <h5>Joined 25 Jan 2011</h5>
                    </div>

                    <a href="/">@octocat</a>
                    <p>This profile has no bio</p>

                    <div className="statistics">
                        <div className='statistics-box'>
                            <h6>Repos</h6>
                            <span>8</span>
                        </div>

                        <div className='statistics-box'>
                            <h6>Followers</h6>
                            <span>3938</span>
                        </div>

                        <div className='statistics-box'>
                            <h6>Following</h6>
                            <span>9</span>
                        </div>
                    </div>

                    <div className='details'>
                        <div className='details-box'>
                            <i className="fa-solid fa-location-dot"/>
                            <span>San Francisco</span>
                        </div>

                        <div className='details-box'>
                            <i className="fa-brands fa-twitter"/>
                            <span>Not Available</span>
                        </div>

                        <div className='details-box'>
                            <i className="fa-solid fa-paperclip"/>
                            <span>https://github.blog</span>
                        </div>

                        <div className='details-box'>
                            <i className="fa-solid fa-building"/>
                            <span>@github</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;
