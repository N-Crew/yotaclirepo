import React from 'react'
import classes from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={`row justify-content-center ${classes.footer}`}  style={{backgroundColor:'white',paddingLeft:'20px' }}>

            <div className="col-6">
              <p>Copyright 2022-2023 YASH technologies Pvt.Ltd. All right reserved.</p>

            </div>
          </div>
  )
}

export default Footer
