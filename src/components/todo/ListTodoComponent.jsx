import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  retrieveAllTodosFromUserApi,
  deleteTodoFromUserApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

function ListTodoComponent() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  const authContext = useAuth();
  const username = authContext.username;

  const navigate = useNavigate();

  useEffect(() => {
    refreshTodos();
  }, []);

  function refreshTodos() {
    retrieveAllTodosFromUserApi(username)
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteTodo(todo) {
    deleteTodoFromUserApi(username, todo.id)
      .then((response) => {
        console.log(response);
        refreshTodos();
        setMessage(`Delete of "${todo.description}" successfully`);
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(todo) {
    console.log("update " + todo.id);
    navigate(`/todo/${todo.id}`); 
  }

  function addNewTodo() {
    navigate(`/todo/-1`); 
  }

  return (
    <>
      <div className="container">
        <h1 className="tw-mb-6">List Todos</h1>
        <table className="table">
          <thead>
            <tr>
              <th>description</th>
              <th>done</th>
              <th>target date</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <>
                  <td>{todo.description}</td>
                  <td>{todo.isDone.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger tw-p-1.5"
                      onClick={() => deleteTodo(todo)}
                    >
                      delete
                    </button>
                    <button
                      className="btn btn-sm btn-dark tw-p-1.5 tw-ml-2"
                      onClick={() => updateTodo(todo)}
                    >
                      edit
                    </button>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
        {message && <div className="alert alert-success tw-mt-3">{message}</div>}
        <div className="btn btn-primary tw-mt-6 tw-w-full"onClick={addNewTodo}>add new Todo</div> 
      </div>
    </>
  );
}

export default ListTodoComponent;
