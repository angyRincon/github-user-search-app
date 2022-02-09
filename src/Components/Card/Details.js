const Details = ({location, twitter_username, blog, company}) => (
    <div className='details'>
        <div className='details-box'>
            <i className="fa-solid fa-location-dot"/>
            <span>{location ? location : 'Not Available'}</span>
        </div>

        <div className='details-box'>
            <i className="fa-brands fa-twitter"/>
            <span>
                {twitter_username ? twitter_username : 'Not Available'}
            </span>
        </div>

        <div className='details-box'>
            <i className="fa-solid fa-paperclip"/>
            <span>
                {blog ?
                    <a href={blog} target='_blank'>{blog}</a>
                    :
                    'Not Available'
                }
            </span>
        </div>

        <div className='details-box'>
            <i className="fa-solid fa-building"/>
            <span>
                {company ? company : 'Not Available'}
            </span>
        </div>
    </div>
)

export default Details;