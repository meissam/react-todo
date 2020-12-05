import React from "react";

const Sidebar = (props) => {
  const {
    tags,
    handleAddFilterTag,
    handleRemoveFilterTag,
    activeFilters,
  } = props;
  return (
    <>
      <div id="tags">
        {tags.length && (
          <h3>
            All Tags
            <hr />
          </h3>
        )}

        {tags.map((tag, index) => (
          <li
            className={activeFilters.includes(tag) ? "selected" : null}
            key={index}
            onClick={(e) => handleAddFilterTag(tag)}
          >
            {tag}

            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFilterTag(tag);
              }}
            >
              <i className="icon-x"></i>
            </button>
          </li>
        ))}
      </div>
    </>
  );
};
export default Sidebar;
