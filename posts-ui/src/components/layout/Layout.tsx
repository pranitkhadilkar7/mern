import { Navbar, Nav, Container } from "react-bootstrap"
import classnames from "classnames"
import classes from "./Layout.module.scss"
import { Outlet, useNavigate } from "react-router-dom"

export function Layout() {
  const navigate = useNavigate()
  return (
    <div className="h-100 overflow-hidden d-flex flex-column">
      <Navbar bg="" expand="lg" className={classes["navbar"]}>
        <Container>
          <Navbar.Brand className={classes["navbar-brand"]}>
            <h2>YourPlaces</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className={classes["navbar-nav"]}>
              <Nav.Link
                className={classnames(classes["nav-link"], "mx-2")}
                onClick={() => {
                  navigate("/")
                }}
              >
                All Users
              </Nav.Link>
              <Nav.Link
                className={classnames(classes["nav-link"], "mx-2")}
                onClick={() => {
                  navigate("/auth")
                }}
              >
                Authenticate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="h-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}
