import { resolveObjectURL } from "buffer";

import { createSelector } from 'reselect';

const getTodos = state => state.todos.data;
const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos =  createSelector(
  getTodos,
  (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => todo.isCompleted),
);
