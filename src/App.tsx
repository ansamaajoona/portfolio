import React from 'react';
import Introducion from './components/Introducion';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div id="container" className="flex flex-col bg-slate-800 max-w-screen min-h-screen h-fit">
      <Introducion />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
