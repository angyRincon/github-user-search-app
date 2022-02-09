import {dateFormat} from "../../utils/format-date";

const HeaderCard = ({name, created_at, login, bio}) => (
    <>
        <div className='title'>
            <h3>{ name }</h3>
            <h5>{ dateFormat(created_at) }</h5>
        </div>

        <a href="/">@{ login }</a>
        <p>
            { bio ? bio : 'This profile has no bio' }
        </p>
    </>
);

export default HeaderCard;