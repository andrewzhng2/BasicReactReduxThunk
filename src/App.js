import React from 'react';
import TodoList from './todos/TodoList';
import './App.css';

const nodeExternals = require('webpack-node-externals');

const App = () => (
  <div classname="App">
    <TodoList />
  </div>
);

export default App;