import React,{useState } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import sidebarClass from  './TraineeSidebar.module.css'
import TraineeSidebarStyle from './TraineeSidebarStyle.css'
// import image from "image path";

const TraineeSidebar = (props) => {
    const [isDropdownActive, setDropdownActive] = useState("false");
    return (
        <div className="wrapper">
            <nav id="sidebar" className={props.isNotActive ? "active" : ""}>
             <div className="sidebar-header">
                {/* <img
                src={image}
                className="rounded-circle usr-image"
                height={isNotActive ? "20" : "70"}
                width={isNotActive ? "20" : "70"}
                ></img> */}
            </div>
              <ul className="list-unstyled components">
                <li className="list-item">
                  <i className="fas fa-book icon-color"></i>
                    <Link to="/members">Test Managment</Link>
                </li>
                <li className="list-item">
                    <i className="fas fa-pencil-square icon-color"></i>
                    <Link to="/organizations">Sample Test</Link>
                </li>
                {/* <li className="list-item">
                <i className="fas fa-user-alt icon-color"></i>
                <Link
                    // to="/portfolio"
                    href="#homeSubmenu"
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle"
                    onClick={() => setDropdownActive(!isDropdownActive)}
                >
                    My Space
                </Link>
                <ul
                    className={
                    isDropdownActive ? "list-unstyled  collapse" : "list-unstyled"
                    }
                    id="homeSubmenu"
                >
                    <li className="dropdown-item">
                        <Link to="/portfolio">Portfolio</Link>
                        <a href="#">Portfolio</a>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/personal-details">Personal Details</Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/additional-info">Additional Info</Link>
                    </li>
                    <li className="dropdown-item">
                        <Link to="/personal-background">Personal Background</Link>
                    </li>
                </ul>
                </li> */}
                <li className="list-item">
                <i className="fas fa-file-text icon-color"></i>
                <Link to="/request-history">Report and views</Link>
                </li>
                <li className="list-item">
                <i className="fas fa-sitemap icon-color"></i>
                <Link to="/organization-profile">Client questions and interviews</Link>
                </li>
            </ul>
            </nav>
        </div>
    );
};

TraineeSidebar.propTypes = {
    
};

export default TraineeSidebar;