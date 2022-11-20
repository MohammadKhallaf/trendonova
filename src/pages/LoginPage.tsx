import { useEffect, useState } from "react";
import EmailForm from "../components/login/EmailForm";
import PhoneForm from "../components/login/PhoneForm";

export interface FormData {
  email?: string;
  phone_number?: string;
  password: string;
}

const LoginPage = () => {
  const [tabIndex, setTabIndex] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({ password: "" });
  useEffect(() => {
    console.log("first");
  }, [formData]);
  return (
    <div className="relative mx-auto flex min-h-screen flex-col justify-center overflow-hidden">
      {/* Login */}
      <div className="shadow-slae-800/50 m-auto w-full rounded border-t border-slate-600 bg-white p-6 shadow-lg lg:max-w-md">
        <h1 className="text-center text-3xl font-semibold text-purple-700">
          trendo
        </h1>
        <h1 className="text-center text-3xl font-semibold text-purple-700">
          مرحبا بك
        </h1>

        <div className="tabs mx-auto mt-20 justify-center">
          <a
            className={`tab tab-bordered ${tabIndex == 1 ? "tab-active" : ""}`}
            onClick={() => setTabIndex(1)}
          >
            رقم الهاتف
          </a>
          <a
            className={`tab tab-bordered ${tabIndex == 2 ? "tab-active" : ""}`}
            onClick={() => setTabIndex(2)}
          >
            البريد الالكتروني
          </a>
        </div>
        <div className="mt-8">
          {tabIndex === 1 ? <PhoneForm setForm={setFormData} /> : <EmailForm />}
          <div className="mt-5">
            <div className="py-5 text-center">احصل على التطبيق</div>
            <div className="flex flex-row justify-center gap-3">
              <button className="btn-secondary btn">من جوجل بلاي</button>
              <button className="btn-secondary btn">من تطبيقات آبل</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
