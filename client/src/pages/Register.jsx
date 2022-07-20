import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <h1>Create an account</h1>
      <Form style={{ height: "460px" }}>
        <TextInput
          required
          type="text"
          placeholder="Enter name"
          icon="person"
          name="name"
          value={name}
          onChange={onChange}
        />
        <TextInput
          type="text"
          required
          placeholder="Enter email"
          icon="alternate_email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <TextInput
          type="password"
          required
          placeholder="Enter password"
          icon="lock"
          name="password"
          value={password}
          onChange={onChange}
        />
        <TextInput
          required
          type="password"
          placeholder="confirm password"
          icon="lock_clock"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
        />
        <Button type="submit">
          {" "}
          <span>Submit now</span>{" "}
        </Button>
        <div className="info">
          Already have an account? <Link to="/Login">Login</Link> instead.
        </div>
      </Form>
    </div>
  );
}

export default Register;
