import PropTypes from "prop-types";

const Search = ({handleSubmit, setUserName}) => {

    const handleChange = ({target}) => setUserName(target.value)

    return (
        <form className='search' onSubmit={handleSubmit}>
            <i className="fa-solid fa-magnifying-glass" onClick={handleSubmit}/>
            <input
                type="text"
                placeholder='Search GitHub username...'
                onChange={handleChange}
            />
            <button>search</button>
        </form>
    )
}

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setUserName: PropTypes.func.isRequired
}

export default Search