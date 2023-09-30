import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {
  retrieveHelloWorld,
  retrieveHelloWorldBean,
  retrieveHelloWorldPathName,
} from "./api/HelloWorldApiService";

function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);
  const [messageBean, setMessageBean] = useState(null);
  const [messageName, setMessageName] = useState(null);


  function callHelloWorldAPI() {
    retrieveHelloWorld()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("Finally response"));

    function successfulResponse(response) {
      console.log(response);
      setMessage(response.data);
    }

    function errorResponse(error) {
      console.log(error);
    }
  }

  function callHelloWorldBeanAPI() {
    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("Finally response"));

    function successfulResponse(response) {
      console.log(response);
      setMessageBean(response.data.message);
    }

    function errorResponse(error) {
      console.log(error);
    }
  }

  function callHelloWorldPathNameAPI() {
    retrieveHelloWorldPathName(username)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("Finally response"));

    function successfulResponse(response) {
      console.log(response);
      setMessageName(response.data.message);
    }

    function errorResponse(error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Welcome {username}</h1>
      <div className="Welcome">
        <div>
          See your todos <Link to="/todo">here</Link>
        </div>
        <div>
          <button className="btn btn-success m-4" onClick={callHelloWorldAPI}>
            Call Hello world
          </button>
          <button
            className="btn btn-success m-4"
            onClick={callHelloWorldBeanAPI}
          >
            Call Hello world Bean
          </button>
          <button
            className="btn btn-success m-4"
            onClick={callHelloWorldPathNameAPI}
          >
            Call Hello world Path Name
          </button>
        </div>
        <div className="text-info tw-w-1/3 tw-mx-auto">
          {message && (
            <div className="container alert alert-success">{message}</div>
          )}
        </div>
        <div className="text-info tw-w-1/3 tw-mx-auto">
          {messageBean && (
            <div className="container alert alert-success">{messageBean}</div>
          )}
        </div>
        <div className="text-info tw-w-1/3 tw-mx-auto">
          {messageName && (
            <div className="container alert alert-success">{messageName}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default WelcomeComponent;
