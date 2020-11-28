import React from "react";

const Layout = (props) => {
  const { header, sidebar, content } = props;
  return (
    <>
      <div id="main-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{header}</div>
          </div>
        </div>
      </div>
      <div id="main-body">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <aside id="sidebar">{sidebar}</aside>
            </div>
            <div className="col-md-9">
              <div id="main-content">{content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
