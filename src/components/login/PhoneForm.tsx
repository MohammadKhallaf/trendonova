import type { Dispatch, SetStateAction } from "react";
import type { FormData } from "../../pages/LoginPage";
import SubmitButton from "./SubmitButton";

type Props = {
  setForm: Dispatch<SetStateAction<FormData>>;
};
const PhoneForm = ({ setForm }: Props) => {
  const submitEmailHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setForm((state) => ({ ...state, phone_number: "5648" }));
  };
  return (
    <form
      onSubmit={submitEmailHandler}
      className="container mx-auto flex h-80 max-w-sm flex-col gap-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-col space-y-4 sm:w-20">
          <label htmlFor="code">الكود</label>
          <select className="select-bordered select w-full " defaultValue={20}>
            {/* <option disabled selected>
              رقم الدولة
            </option> */}
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={60}>60</option>
          </select>
        </div>
        <div className="flex flex-grow flex-col space-y-4">
          <label htmlFor="phone_number">رقم الهاتف</label>
          <input
            name="phone_number"
            id="phone_number"
            type="tel"
            placeholder="ادخل رقم الموبايل"
            autoComplete="phone_number"
            className="input-bordered input w-full "
          />
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default PhoneForm;
