function ListTodoComponent() {
    const todos = [
      {
        id: 1,
        description: "Learn React",
        done: false,
        targetDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      },
      {
        id: 2,
        description: "Learn Spring",
        done: false,
        targetDate: new Date(new Date().getTime() + 24 * 60 * 60 * 2000),
      },
      {
        id: 3,
        description: "Learn Docker",
        done: false,
        targetDate: new Date(new Date().getTime() + 24 * 60 * 60 * 3000),
      },
    ];
  
    return (
      <>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>done</th>
                <th>target date</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toDateString()}</td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

export default ListTodoComponent;