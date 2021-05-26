import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from "../../redux/directory/directory.selector";

import "./directory.styles.scss";
//class component we need to save state value

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {/* /*{this.state.sections.map(({ title, imageUrl, id, size,linkUrl }) => (
                  <MenuItem key={id} title={title} imageUrl ={imageUrl} size={size} linkUrl={linkUrl}/> below will be equivalent to this*/}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
