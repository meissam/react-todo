import React from "react";

const Header = (props) => {
  const { tags, handleAddFilterTag, handleRemoveFilterTag, activeFilters } = props;
  return (
    <>
      <div id="tags">
        {tags.map((tag, index) => (

          <li className={ activeFilters.includes(tag) ? "selected" : null } key={index} onClick={e => handleAddFilterTag(tag)}>
            
            {tag}
           
            <button onClick={e => handleRemoveFilterTag(tag)}>
              <i className="icon-x"></i>
            </button>
          </li>

        ))}
      </div>
    </>
  );
};
export default Header;
