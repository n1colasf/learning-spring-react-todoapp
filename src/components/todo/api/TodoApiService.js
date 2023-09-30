import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export function retrieveAllTodosFromUserApi(username) {
  return apiClient.get(`/users/${username}/todos`);
}

export function deleteTodoFromUserApi(username, id) {
  return apiClient.delete(`/users/${username}/todos/${id}`);
}

export function retrieveTodoFromUserApi(username, id) {
  return apiClient.get(`/users/${username}/todos/${id}`);
}

export function updateTodoFromUserApi(username, id, todo) {
  return apiClient.put(`/users/${username}/todos/${id}`, todo);
}

export function createTodoFromUserApi(username, todo) {
  return apiClient.post(`/users/${username}/todos`, todo);
}
