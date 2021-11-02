import React, { useState } from "react";

function SelectionLists({
  selectionLists,
  activeList,
  onSelect,
  onDelete,
  onEdit
}) {
  const [confirm, setConfirm] = useState(null);

  const handleDeleteConfirm = (e, list) => {
    setConfirm(list);
    e.stopPropagation();
  };

  const handleDeleteCancel = (e) => {
    e.stopPropagation();
    setConfirm(null);
  };

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

                {confirm && confirm.value === list.value ? (
                  <>
                    <button onClick={(e) => onDelete(e, list)}>Confirm</button>
                    <button onClick={(e) => handleDeleteCancel(e, list)}>
                      No
                    </button>
                  </>
                ) : (
                  <button onClick={(e) => handleDeleteConfirm(e, list)}>
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SelectionLists;
