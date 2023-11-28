import React from "react";
function HamBurger() {
return (
    <>
        <div className={classes.appHeaderLogo}>
            <div className={classes.logoSrc}></div>
            <div className={classes.headerPane + ' ' + classes.mlAuto}>
                <div>
                    <button type="button" className={classes.hamburger + ' ' + classes.closeSidebarBtn + ' ' + classes.hamburgerElastic}>
                        <span className={classes.hamburgerBox}>
                            <span className={classes.hamburgerInner}></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}