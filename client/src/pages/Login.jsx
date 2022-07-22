import { useState, useEffect } from "react";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../feactures/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { user, isError, isLoading, isSuccess, massage } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(massage);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    console.log("Effect");

    dispatch(reset());
  }, [user, isError, isSuccess, massage, dispatch, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(login(formData));
  };

  return (
    <div className="form">
      <h1>Login to your account</h1>
      <Form style={{ height: "300px" }} onSubmit={onSubmit}>
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
