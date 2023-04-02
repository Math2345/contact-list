import { useState } from "react";

const Card = ({ url, name, email, age }) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={url} alt="profile" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show age</button>
        {showAge && <p>Age: {age}</p>}
      </div>
    </div>
  );
};

export default Card;
