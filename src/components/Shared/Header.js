import React from "react"

import logo from '../../public/logo.svg'

function Header() {
    return (
        <div className="w-full border-b-2">
            <div className="item-centers mx-auto py-2 max-w-9/10">
                <img className="h-12 w-auto sm:h-16" src={logo} alt="Logo"/>
            </div>
        </div>
    );
}

export default Header