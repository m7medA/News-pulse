import { useForm } from "react-hook-form";

import FormRow from "../../components/FormRow";
import Form from "../../components/Form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const navigate = useNavigate();

  async function onSubmit({ username, password }) {
    password = String(password);

    const response = await login({ username, password });

    if (response.success) {
      navigate("/");
      reset();
    }
    if (response.message) {
      setError("cerdential", {
        type: "server",
        message: response.message.non_field_errors[0],
      });
    }
  }

  return (
    <div className="w-[90%] sm:w-[66%] md:w-[56%] lg:w-[40%] xl:w-[32%] mx-auto">
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormRow
          id="username"
          type="text"
          register={register("username", {
            required: "This field is required !",
          })}
          error={errors.username}
          placeholder="username"
        >
          username
        </FormRow>
        <FormRow
          id="password"
          type="password"
          register={register("password", {
            required: "This field is required !",
          })}
          error={errors.password}
          placeholder="********"
        >
          password
        </FormRow>

        {errors.cerdential && (
          <p className="text-center text-sm font-semibold text-[var(--third-color)]">
            {errors.cerdential.message}
          </p>
        )}

        <Button type="submit" color="bg-[var(--third-color)]">
          login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
