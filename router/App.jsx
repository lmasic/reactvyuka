/* eslint linebreak-style: ["error", "windows"] */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Nav from './components/Nav';
import Todo from './components/todos/Todo';
import Words from './components/Words';

const App = () => (
  <BrowserRouter>
    <Nav />
    <h1>Hello world! I&apos;m first react component!</h1>

    <div className="row">
      {`${PRODUCTION ? 'Jde' : 'Nejde'} o produkční webovku.`}
    </div>

    <Routes>
      <Route end path="/" />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todos" element={<Todo />} />
      <Route path="/words" element={<Words />} />
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </BrowserRouter>
);

export default App;
