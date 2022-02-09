import Statistics from "./Statistics";
import Details from "./Details";
import HeaderCard from "./HeaderCard";
import PropTypes from "prop-types";

const Card = ({user}) => {
    return (
        <div className="card">
            <div className='box'>
                <img
                    src={user.avatar_url}
                    alt={user.name}/>
            </div>

            <div className='box'>
                <HeaderCard {...user} />
            </div>

            <div className='box box-3'>
                <p>
                    { user.bio ? user.bio : 'This profile has no bio' }
                </p>

                <Statistics {...user} />

                <Details {...user} />

            </div>
        </div>
    )
}

Card.propTypes = {
    user: PropTypes.object.isRequired
}

export default Card