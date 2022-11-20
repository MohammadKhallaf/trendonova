import React from "react";
import SubmitButton from "./SubmitButton";

const EmailForm = () => {
  const submitEmailHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form
      onClick={submitEmailHandler}
      className="container mx-auto flex h-80 max-w-sm flex-col gap-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-grow flex-col space-y-4">
          <label htmlFor="email">رقم الهاتف</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="username@email.com"
            autoComplete="email"
            className="input-bordered input w-full "
          />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default EmailForm;
