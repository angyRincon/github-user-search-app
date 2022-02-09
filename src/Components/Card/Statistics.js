const Statistics = ({ public_repos, followers, following }) => (
    <div className="statistics">
        <div className='statistics-box'>
            <h6>Repos</h6>
            <span>{public_repos}</span>
        </div>

        <div className='statistics-box'>
            <h6>Followers</h6>
            <span>{followers}</span>
        </div>

        <div className='statistics-box'>
            <h6>Following</h6>
            <span>{following}</span>
        </div>
    </div>
)

export default Statistics