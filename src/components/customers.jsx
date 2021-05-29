import React from "react";

const Customers = () => {
  return (
    <div>
      <h1>Customers</h1>
      <ul className="dropdown-menu">
        <li>
          <h1 className="dropdown-header">Dropdown header</h1>
        </li>
        <li>
          <a className="dropdown-item" href="/#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/#">
            Another action
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Customers;
