import {
  retrieveTodoFromUserApi,
  updateTodoFromUserApi,
  createTodoFromUserApi,
} from "../todo/api/TodoApiService";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";

export default function TodoComponennt() {
  const { id } = useParams();

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const navigate = useNavigate();
  const authContext = useAuth();

  const username = authContext.username;

  useEffect(() => {
    retrieveTodo();
  }, [id]);

  function retrieveTodo() {
    if (id != -1) {
      retrieveTodoFromUserApi(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => console.log(error));
    }
  }

  function onSubmit(values) {
    console.log(values);
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };

    if(id == -1) {
        createTodoFromUserApi(username, todo)
            .then((response) => {
            navigate(`/todo`);
            })
            .catch((error) => console.log(error));
    } else {
      updateTodoFromUserApi(username, id, todo)
        .then((response) => {
          navigate(`/todo`);
        })
        .catch((error) => console.log(error));
    }
}

  function validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a valid description";
    } else if (values.description.length < 10) {
      errors.description = "Enter at least 10 characters in description";
    }
    if (!values.targetDate || !moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a target date";
    }
    return errors;
  }

  return (
    <div className="container">
      <h1 className="tw-mb-10">Todo details</h1>
      {id != "-1" ? (
        <h2 className="tw-mb-6">Edit Todo #{id}</h2>
      ) : (
        <h2 className="tw-mb-6">Create new Todo</h2>
      )}
      <Formik
        initialValues={{ description, targetDate }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form>
            <ErrorMessage
              name="description"
              component="div"
              className="alert alert-warning tw-mt-2"
            />
            <ErrorMessage
              name="targetDate"
              component="div"
              className="alert alert-warning tw-mt-2"
            />
            <fieldset className="form-group">
              <label>Description</label>
              <Field className="form-control" type="text" name="description" />
            </fieldset>
            <fieldset className="form-group">
              <label>Target Date</label>
              <Field className="form-control" type="date" name="targetDate" />
            </fieldset>
            <button
              className="btn btn-success tw-mt-10 tw-w-full"
              type="submit"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
