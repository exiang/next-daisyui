function User({user}) {
    return (
        <div key={user.id}>
            <p>{user.name}<br />{user.email}</p>
        </div>
    )
}

export default User;