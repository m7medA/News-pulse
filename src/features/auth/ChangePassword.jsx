import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { updatePassword } from "../../services/userServices";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ChangePassword() {
  const [errorMessage, setErrorMessage] = useState();

  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit({ oldPassword, newPassword }) {
    const request = await updatePassword({ token, oldPassword, newPassword });

    if (request.message) {
      alert(request.message);
      navigate(-1);
      reset();
    }
  }

  return (
    <div className="w-[90%] sm:w-[66%] md:w-[56%] lg:w-[40%] h-80 xl:w-[32%] mx-auto flex flex-col justify-center">
      <Form withLogo={false} handleSubmit={handleSubmit(onSubmit)}>
        <FormRow
          id="password"
          label="Old Passwprd"
          type="oldPassword"
          error={errors.oldPassword}
        >
          <TextInput
            id="password"
            type="oldPassword"
            register={register("oldPassword", {
              required: "This field is required !",
            })}
            error={errors.oldPassword}
            placeholder="********"
          />
        </FormRow>

        <FormRow
          id="password"
          label="New Passwprd"
          type="newPassword"
          error={errors.newPassword}
        >
          <TextInput
            id="password"
            type="newPassword"
            register={register("newPassword", {
              required: "This field is required !",
            })}
            error={errors.newPassword}
            placeholder="********"
          />
        </FormRow>

        {errorMessage && (
          <p className="text-center text-sm font-semibold text-[var(--third-color)]">
            {errorMessage}
          </p>
        )}

        <Button
          color={`bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md`}
          type="submit"
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default ChangePassword;
