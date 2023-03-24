import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";

//MUI icons
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

//menu links
const pages = ["About", "Work", "Contact"];

function Nav() {
  <>
    <Container className="headerNav">
      <Navbar collapseOnSelect expand="lg" className="my-5">
        <Navbar.Brand id="logo" href="/">
          KT!
        </Navbar.Brand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" href="/projects">
              Projects
            </NavLink>
            <NavLink className="nav-link" href="/Contact">
              Contact
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </Container>
  </>;
}

export default Nav;

/*  <Container>
  <Nav class="navbar" id="mainNav">
    <div class="logo">
      <a href="#home">
        KT<span class="emph">!</span>
      </a>
    </div>

    {pages.map((page) => (
      <Nav.Item>
        <NavLink className="mr-2" to={`/${page}`}>
          {page}
        </NavLink>
      </Nav.Item>
    ))}
  </Nav>
</Container> */

/* <>
      <Box>
        <AppBar component="nav" position="static" elevation={0}>
          <Toolbar
            className="topToolbar"
            sx={{
              flexDirection: "row-reverse",
              backgroundColor: "transparent",
            }}
          >
            <Typography>KT!</Typography>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                className="hamburger"
                size="large"
                aria-label="hamburger icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        className="mobileDr"
        sx={{
          display: { xs: "block", md: "none" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose();
        }}
        open={open}
      >
        <DrawerHeader
          sx={{ justifyContent: "space-between" }}
          className="logoBg"
        >
          <Typography variant="h3" className="logo">
            gutenBooks
          </Typography>
          <IconButton className="closeBtn" onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        
        //Menu items
        <List className="menuMobileList">
          {pageItems.map((page) => (
            <ListItem className="menuItem" key={page}>
              <ListItemButton to={`/${page}`}>{page}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */
