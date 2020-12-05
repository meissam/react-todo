import React from "react";
import {connect} from "react-redux";
import {Alert } from 'react-bootstrap'
import { addFilterTag, removeFilterTag } from "../actions/filterTags";
import getAllTags from '../selectors/allTags';


const Sidebar = (props) => {
  const {
    notes,
    filterTags,
  } = props;


  return (
    <>
      <div id="tags">
        {getAllTags(notes).length > 0 ? (<h3>All Tags<hr /></h3>) : (<Alert variant='warning'>No Tag</Alert>)  }

        { 
         getAllTags(notes).map((tag, index) => (
           <li
             className={filterTags.includes(tag) ? "selected" : null}
             key={index}
             onClick={(e) => props.dispatch(addFilterTag(tag))}
           >
             {tag}

             <button
               className="btn"
               onClick={(e) => {
                 e.stopPropagation();
                 props.dispatch(removeFilterTag(tag));
               }}
             >
               <i className="icon-x"></i>
             </button>
           </li>
         ))
        
        } 
      </div>
    </>
  );
};


const mapStateToProps = (state) =>({
  ...state
})

export default connect(mapStateToProps)(Sidebar);
