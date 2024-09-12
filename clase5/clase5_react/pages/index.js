import Toogle from './components/Toogle';
import Gallery from './components/Gallery';
// import AnotherToogle from './components/AnotherToogle';
import Parent from './components/Parent';
import AnotherParent from './components/AnotherParent';
import ToDoList from './components/ToDoList';
import NameFilter from './components/EjemploFilter';


export default function Home() {
  return (
    <>
      <head>
        <title>Me Page</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div className="bg-blue-100 p-4 mb-2">
          <h1 className="text-4xl text-center">Welcome to Next.js!</h1>
          {/* loren text bg-green */}
          <p className="text-center bg-green-200 p-4 ">
            Get started by editing <code>pages/index.js</code>
          </p>
        </div>
        <Toogle />
        <Gallery />
        {/* <AnotherToogle /> */}
        <Parent />
        <AnotherParent />
        <ToDoList />
        <NameFilter />
      </body>
    </>
  );
}
