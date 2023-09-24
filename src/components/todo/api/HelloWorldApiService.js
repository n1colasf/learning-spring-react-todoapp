import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export function retrieveHelloWorld() {
  return apiClient.get("/hello-world");
}

export function retrieveHelloWorldBean() {
  return apiClient.get("/hello-world-bean");
}

export function retrieveHelloWorldPathName(username) {
  return apiClient.get(`/hello-world/path-variable/${username}`
  );
}
