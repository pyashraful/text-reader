import { useState, useEffect } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../feactures/auth/authSlice";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, massage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(massage);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    console.log("Effect")

    dispatch(reset());
  }, [user, isError, isSuccess, massage, dispatch, navigate]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      const formData = {
        name,
        email,
        password,
      };
      dispatch(register(formData));
    }
  };

  return (
    <div className="form">
      <h1>Create an account</h1>
      <Form style={{ height: "460px" }} onSubmit={onSubmit}>
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
