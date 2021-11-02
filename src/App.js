import React, { useState } from "react";
import "./styles.css";
import Selection from "./components/Selection";
export default function App() {
  const selectionLists = [
    {
      label: "Certificate discovery",
      value: "Certificate discovery"
    },
    {
      label: "Get device list",
      value: "Get device list"
    },
    {
      label: "Cancel request",
      value: "Cancel request"
    }
  ];

  const [selectedList, setSelectedList] = useState(null);

  const handleSelection = (e, selected) => {
    console.log(selected);
    setSelectedList(selected);
  };

  const handleDelete = (e, list) => {
    console.log("Delete");
    e.stopPropagation();
  };

  const handleEdit = (e, list) => {
    console.log("Edit");
    e.stopPropagation();
  };

  return (
    <div className="App">
      <Selection
        selectionLists={selectionLists}
        onSelect={handleSelection}
        onDelete={handleDelete}
        onEdit={handleEdit}
        activeList={selectedList}
      />
    </div>
  );
}
