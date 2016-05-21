import axios from "axios";
import TodoActions from "./TodoActions";

export default {
  fetchTodos: {
    remote(state) {
      return axios.get('/todos');
    },
    success: TodoActions.updateTodos,
    error: TodoActions.failedToFetchTodos
  },
  addTodo: {
    remote(state, item) {
      return axios.post('/todos', {
        title: item.title,
        completed: item.completed
      });
    },
    success: TodoActions.addedTodo,
    error: TodoActions.failedToAddTodo
  },
  updateTodo: {
    remote(state, item) {
      return axios.patch('/todos/item/' + item.id, {
        title: item.title,
        completed: item.completed
      });
    },
    success: TodoActions.updatedTodo,
    error: TodoActions.failedToUpdateTodo
  },
  deleteTodo: {
    remote(state, item) {
      return axios.delete('/todos/item/' + item.id);
    },
    success: TodoActions.deletedTodo,
    error: TodoActions.failedToDeleteTodo
  }
}