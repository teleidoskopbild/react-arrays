function UserDisplay({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          <img
            src={user.picture.thumbnail}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <p>{`${user.name.title} ${user.name.first} ${user.name.last} (${user.gender}, ${user.dob.age} years old)`}</p>
          <p>Email: {user.email}</p>
          <p>
            Location: {user.location.city}, {user.location.state},{" "}
            {user.location.country}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default UserDisplay;
