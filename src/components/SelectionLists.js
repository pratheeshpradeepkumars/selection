import React from "react";

function SelectionLists({
  selectionLists,
  activeList,
  onSelect,
  onDelete,
  onEdit
}) {
  return (
    <>
      {selectionLists && (
        <div className="selection-lists">
          {selectionLists.map((list) => (
            <div
              key={list.value}
              className={`list-item ${
                activeList && activeList.value === list.value ? "active" : ""
              }`}
              onClick={(e) => onSelect(e, list)}
            >
              <div className="list-name"> {list.label}</div>
              <div className="list-actions">
                <button onClick={(e) => onEdit(e, list)}>Edit</button>
                <button onClick={(e) => onDelete(e, list)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectionLists;
