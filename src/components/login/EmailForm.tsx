import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { FormData } from "../../pages/LoginPage";
import SubmitButton from "./SubmitButton";
import { useAppDispatch } from "../../app/store";
import { setLogIn } from "../../app/features/auth";
import { useNavigate } from "react-router-dom";
type Props = {
  setForm: Dispatch<SetStateAction<FormData>>;
};
const EmailForm = ({ setForm }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitEmailHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setForm((state) => ({ ...state, email: input }));
    dispatch(setLogIn(true));
    navigate("/");
  };
  return (
    <form
      onSubmit={submitEmailHandler}
      className="container mx-auto flex h-80 max-w-sm flex-col gap-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-grow flex-col space-y-4">
          <label htmlFor="email">الإيميل</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="username@email.com"
            autoComplete="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-bordered input w-full "
          />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default EmailForm;
