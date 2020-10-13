import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../css/myNavbarStyle.css";

class MyNavbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          sticky="top"
          expand="lg"
          style={{
            position: "fixed",
            backgroundColor: "#1b152b",
            width: "100vw",
          }}
        >
          <Navbar.Toggle id="toggle_button" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={{ marginLeft: 0, marginRight: 0 }}>
              <div
                id="container"
                className="container"
                style={{ width: "100vw" }}
              >
                <div className="row" style={{ margin: 0 }}>
                  <div id="col-sm" className="col-sm">
                    <Nav.Link id="nav_link_home" href="#Home">
                      Home
                    </Nav.Link>
                  </div>
                  <div className="col-sm">
                    <Nav.Link id="nav_link_story" href="#Story">
                      Story
                    </Nav.Link>
                  </div>
                  <div className="col-sm">
                    <Nav.Link id="nav_link_background" href="#Background">
                      Background
                    </Nav.Link>
                  </div>
                  <div className="col-sm">
                    <Nav.Link id="nav_link_BGEA" href="#BGEA">
                      BGEA
                    </Nav.Link>
                  </div>
                  <div className="col-sm">
                    <Nav.Link id="nav_link_message" href="#Leave_a_Message">
                      Leave a Message
                    </Nav.Link>
                  </div>
                  <div className="col-sm">
                    <NavDropdown
                      className="btn btn-outline-secondary btn-sm"
                      title="Join Us"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item id="item" href="#Email">
                        Email
                      </NavDropdown.Item>
                      <NavDropdown.Item id="item" href="#Phone">
                        Phone
                      </NavDropdown.Item>
                      <NavDropdown.Item id="item" href="#Address">
                        Address
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item id="item" href="#Others">
                        Others
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default MyNavbar;
