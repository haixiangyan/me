import React, {FC} from 'react';
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import About from "./sections/About";

const App: FC = () => {
  return (
    <div>
      <Nav />

      <main>
        <Home/>
        <About/>
      </main>
    </div>
  );
}

export default App;
