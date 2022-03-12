import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div>
      <h1>Contact App</h1>
      <input
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
        placeholder="Filter contact"
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
