import React from "react";
import { createHashHistory } from "history";
import MyRoutes from './routes/route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  return (
    <MyRoutes history={createHashHistory()} />
  );
}

export default App;
