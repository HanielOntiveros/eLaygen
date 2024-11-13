import { NavLink } from "react-router-dom"

export const SectionMenu = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <NavLink
                                className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}
                                to='/header'
                            >
                                Header
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}
                                to='/main'
                            >
                                Main
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}
                                to='/footer'
                            >
                                Footer
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => ` nav-link ${isActive ? 'active' : ''}`}
                                to='/html-json'
                            >
                                HTML-JSON
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav >

        </>

    )
}