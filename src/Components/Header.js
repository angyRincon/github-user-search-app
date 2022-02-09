import PropTypes from "prop-types";

const Header = ({lightMode, handleToggle}) => (
    <div className="header">
        <h4>devfinder</h4>
        <button onClick={handleToggle}>
            <span>{!lightMode ? 'dark' : 'light'}</span>
            <i className={!lightMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}/>
        </button>
    </div>
)

Header.propTypes = {
    lightMode: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default Header