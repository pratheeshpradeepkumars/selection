import React, { useRef, useState, useEffect } from "react";
import SelectionLists from "./SelectionLists";

function Selection({
  selectionLists,
  activeList,
  onSelect,
  onDelete,
  onEdit,
  onCreate
}) {
  const [filteredList, setFilteredList] = useState(null);
  const [toggleList, setToggleList] = useState(false);
  const searchRef = useRef("");
  const wrapperRef = useRef(null);

  const handleSearch = () => {
    const value = searchRef.current.value;
    const newfilteredList =
      value && value !== ""
        ? selectionLists.filter(
            (list) => list.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          )
        : selectionLists;
    setFilteredList(newfilteredList);
  };

  const handleToggle = () => {
    setToggleList((prev) => !prev);
  };

  const handleSelect = (e, list) => {
    onSelect(e, list);
    setToggleList(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setToggleList(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (toggleList) {
      setFilteredList(selectionLists);
    }
  }, [toggleList, selectionLists]);

  return (
    <div className="selection-container" ref={wrapperRef}>
      <div className="selection-block">
        <div className="selection-info" onClick={handleToggle}>
          <div className="selection">{activeList ? activeList.label : ""}</div>
          <div className="selection-icons">V</div>
        </div>
      </div>
      {toggleList && (
        <div className="selection-list-container">
          <div className="main-actions">
            <div className="list-search">
              <input
                ref={searchRef}
                type="text"
                onChange={handleSearch}
                placeholder="Search"
              />
            </div>
            <div className="list-create">
              <button onClick={onCreate}>Create</button>
            </div>
          </div>

          <SelectionLists
            selectionLists={filteredList}
            activeList={activeList}
            onSelect={handleSelect}
            onDelete={onDelete}
            onEdit={onEdit}
          />
          {filteredList &&
            filteredList.length === 0 &&
            searchRef &&
            searchRef.current &&
            searchRef.current.value === "" && (
              <div className="no-records">No records</div>
            )}
          {filteredList &&
            filteredList.length === 0 &&
            searchRef.current &&
            searchRef.current.value !== "" && (
              <div className="no-records">No result found </div>
            )}
        </div>
      )}
    </div>
  );
}

export default Selection;
