import React, {FC} from 'react';
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import About from "./sections/About";
import Project from "./sections/Project"

const App: FC = () => {
  return (
    <div>
      <Nav />

      <main>
        <Home/>
        <About/>
        <Project/>
      </main>
    </div>
  );
}

export default App;
