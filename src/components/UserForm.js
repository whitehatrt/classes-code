import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import Layout from "./Layout";
function UserForm() {
  const [formdata, setFormdata] = useState({ username: "" });
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.username.length >= 5) {
        //API call After Validating
        console.log(formdata);
        setIsError(false);
        setFormdata({username:''});

    } else {
      setIsError(true);
    }
  };

  return (
    <Layout title="Create User">
      <div className="container mt-4">
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          {isError && (
            <Alert variant={"warning"}>
              Username Must Be At Least Five Characters
            </Alert>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={(e) => {
                handleChange(e);
              }}
              value={formdata.username}
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Layout>
  );
}

export default UserForm;
