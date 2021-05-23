import React from "react";

function ListGroup({
  listItems,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedGenere,
}) {
  return (
    <div>
      <ul className="list-group">
        {listItems.map((item) => (
          <li
            key={item[valueProperty]}
            className={
              item === selectedGenere
                ? "list-group-item clickable active"
                : "list-group-item clickable"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
