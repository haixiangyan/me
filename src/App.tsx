import React, {FC} from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";

const App: FC = () => {
  return (
    <div>
      <Nav />

      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
