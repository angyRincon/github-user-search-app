import {dateFormat} from "../../utils/format-date";

const HeaderCard = ({name, created_at, login, bio}) => (
    <>
        <div className='title'>
            <div>
                <h3>{ name }</h3>
                <a href="/">@{ login }</a>
            </div>
            <h5>{ dateFormat(created_at) }</h5>
        </div>
    </>
);

export default HeaderCard;