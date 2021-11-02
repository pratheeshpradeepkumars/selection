import React from "react";

function Selection() {
  return (
    <div className="selection-container">
      <div className="selection-block">
        <div className="selection-info">
          <div className="selection">Selection</div>
          <div className="selection-icons">V</div>
        </div>
        <div className="actions">
          <div className="create">Create +</div>
        </div>
      </div>
      <div className="selection-list-container">
        <div className="list-search">
          <input type="text" />
        </div>
        <div className="selection-lists">
          <div className="list-item">Certificate discovery</div>
          <div className="list-item">Get device list</div>
          <div className="list-item">Cancel request</div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
