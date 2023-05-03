import React from 'react'
import './NavbarApp.css'
import logo from './logo.png'

const Navbar = () => {
    return (
        <>

            <div className="navbar-main">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} alt="logo" />TechRec</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <span className="line"></span>
            </div>

        </>
    )
}

export default Navbar