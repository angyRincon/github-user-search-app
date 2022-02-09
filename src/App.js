function App() {
    return (
        <div className="container">
            <div className="header">
                <h4>devfinder</h4>
                <button>
                    <span>light</span>
                    <i className="fa-solid fa-sun"/>
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
                        src="data:image/png;base64,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"
                        alt=""/>
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
