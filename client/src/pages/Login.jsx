import { useState } from "react";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h1>Login to your account</h1>
      <Form style={{ height: "300px" }}>
        <TextInput
          required
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          name="email"
          value={email}
          onChange={onChange}
        ></TextInput>
        <TextInput
          required
          type="password"
          placeholder="Enter password"
          icon="lock"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Button type="submit">
          <span>Submit now </span>{" "}
        </Button>
        <div className="info">
          Don't have an account? <Link to="/register">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
}

export default Login;
