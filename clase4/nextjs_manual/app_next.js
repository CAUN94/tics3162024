const app = document.getElementById("app");

// Funcion que retorna un h1 con el texto "Hello World"
function Helloworld() {
  return <h1>Hello World</h1>;
}

// Funcion Hello World pasando props en los que debo especificar la variable que quiero usar
function HelloworldProps(props) {
  return <p>{props.text} name: {props.name}</p>;
}

// Función Hello World especificando las props que se van a usar
function HelloworldPropsName({ text, name }) {
  return <p>{text} name: {name}</p>;
}

// Funcion Hello World con props por defecto
function HelloworldDefaultProps({ text = "Hello World with default props", name = "Cristobal" }) {
  return <p>{text} name: {name}</p>;
}

// Funcion con uso de  state
function LikeButton() {
    // Declaración de una variable de estado llamada "likes" con valor inicial 0
  const [likes, setLikes] = React.useState(0);
  
    // Función que incrementa el valor de la variable "likes" en 1
    function LikeButton() {
    setLikes(likes + 1);
    }

    // Renderizamos un botón que muestra el valor de la variable "likes"
  return (
    <div>
      <button onClick={LikeButton}>Likes: {likes}</button>
    </div>
  );
}

function DisLikeButton() {
    const [dislikes, setDislikes] = React.useState(0);
  
    function DisLikeButton() {
    setDislikes(dislikes + 1);
    }
  
    return (
    <div>
      <button onClick={DisLikeButton}>DisLikes: {dislikes}</button>
    </div>
  );
}

// Vamos a hacer una funcion toggle
function Toogle() {
 const [isVisible, setIsVisible] = React.useState(false);

 function toogleVisibility() {
   setIsVisible(!isVisible);
 }

 return (
   <div>
     <button onClick={toogleVisibility}>Toogle</button>
     <p>El estado es: {isVisible ? 'Visible' : 'Oculto'}</p>
     {isVisible && <p>This is a toggled paragraph.</p>}
   </div>
 );
}

// Funcion Lista de cosas por hacer
function ToDoList() {
    const [tasks, setTasks] = React.useState(["Task 1", "Task 2"]);
  
    function addTask() {
      setTasks([...tasks, `Task ${tasks.length + 1}`]);
    }
  
    return (
      <div>
        <span>Cantidad de tareas: {tasks.length}</span>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <button onClick={addTask}>Add Task</button>
      </div>
    );
  }

// Funcion donde renderizamos los componentes
function App() {
  return (
    <div>
      <Helloworld />
      <Helloworld />
      <HelloworldProps text="Hello World with props" name="Cristobal" />
        <HelloworldPropsName text="Hello World with props again" name="Andres" />
        <HelloworldDefaultProps />
        <HelloworldDefaultProps text="Not Default Title" name="Not default name" />
        <LikeButton />
        <br />
        <DisLikeButton />
        <br />
        <Toogle />
        <ToDoList />
    </div>
  );
}

// Renderizamos el componente App en el elemento app
const root = ReactDOM.createRoot(app);
root.render(<App />);