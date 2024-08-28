// app.js

function Header({ title }) {
    return <h1>{title}</h1>;
  }
  
  function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = React.useState(0);
  
    const handleClick = () => {
      setLikes(likes + 1);
    };
  
    return (
      <div>
        <Header title="Hello Mundo" />
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Likes ({likes})</button>
      </div>
    );
  }
  
  // Renderiza el componente HomePage en el contenedor root
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);
  