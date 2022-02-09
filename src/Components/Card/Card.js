import Statistics from "./Statistics";
import Details from "./Details";
import HeaderCard from "./HeaderCard";

const Card = () => {
    return (
        <div className="card">
            <div className='box'>
                <img
                    src={"assets/octocat.png"}
                    alt="octocat"/>
            </div>

            <div className='box'>

                <HeaderCard/>

                <Statistics/>

                <Details/>

            </div>
        </div>
    )
}

export default Card