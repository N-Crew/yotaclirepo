import React, {useState} from "react";
import "./List.css";
import InputField from "../../../ui/inputField/InputField";
import classes from "../../../components/Question/listQuestion/HeaderItem.module.css";


const HeaderItem = (props) => {
  const handleSearchInput = (e) => {
    props.handleSearchInput(e.target.value);
  };

  return (
    <div className="row">
      <div className="row mt-3">
        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
          <h5 className={classes.boxtitle}>
            List Of Question
            <button className={classes.btnfilter}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </h5>
        </div>

        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
          <form className="form-inline">
            <div className="d-flex">
              <InputField>
                <input
                  className={classes.inputField}
                  type="search"
                  placeholder="Search keyword..."
                  aria-label="Search" 
                  onChange={handleSearchInput}
                />
              </InputField>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;

