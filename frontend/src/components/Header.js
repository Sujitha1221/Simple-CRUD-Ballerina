import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-grey">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-auto">  
            <a className="navbar-brand" href="/">  
            <img src="logo.jpg" alt="" width="70" height="70" className="d-inline-block align-top" />
            </a>
          </div>
          <div className="col">
            <a className="nav-link active" aria-current="page" href="https://wso2.com/">
              WSO2 Website
            </a>
          </div>
          <div className="col">
            <a className="nav-link" href="/">
              Register
            </a>
          </div>
          <div className="col">
            <a className="nav-link" href="/update">
              Update
            </a>
          </div>
          <div className="col">
            <a className="nav-link" href="/del">
              Delete
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
