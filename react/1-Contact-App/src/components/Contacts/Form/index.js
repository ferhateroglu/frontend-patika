import { useEffect, useState } from "react";

function Form({ addContacts, contacts }) {

  const initialFormValues = { fullName: "", phoneNumber: "" }
  const [form, setFrom] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    addContacts([...contacts, form]);
    setFrom(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            onChange={onChangeInput}
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
          />
        </div>
        <div>
          <input
            onChange={onChangeInput}
            name="phoneNumber"
            placeholder="Number"
            value={form.phoneNumber}
            type="number"
          />
        </div>
        <button onClick={onSubmit}>add</button>
      </form>
    </div>
  );
}

export default Form;
