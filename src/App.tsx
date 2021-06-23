import React, {FC} from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

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
