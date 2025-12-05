function App() {
  const user = {
    name: "Kushal",
    age: 23,
    skills: ["React", "JS", "HTML"]
  };

  return (
    <>
      {/* Heading */}
      <h1>Hello, {user.name}!</h1>

      {/* Conditional */}
      {user.age > 18 ? <p>Adult</p> : <p>Minor</p>}

      {/* Spread props */}
      <div id="box" {...{ className: "profile-box" }}>
        <h3>Your Skills:</h3>

        {/* List with key */}
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Self closing */}
      <hr />

      {/* JSX Element */}
      <footer>
        <p>Made with ❤️ by React</p>
      </footer>
    </>
  );
}
