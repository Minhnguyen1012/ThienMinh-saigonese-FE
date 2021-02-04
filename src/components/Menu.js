import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Avatar } from "@material-ui/core";
import { Nav } from "react-bootstrap";
import authActions from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentUser = useSelector((state) => state.auth.user);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Nav.Link
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <Avatar alt="avatar" src={currentUser?.avatarUrl} />
      </Nav.Link>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText>{currentUser?.name}</ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AddCircleIcon fontSize="small" />
          </ListItemIcon>

          <Nav.Link style={{ color: "black" }} as={Link} to="/admin/food/add">
            Recipe
          </Nav.Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <SupervisorAccountIcon fontSize="small" />
          </ListItemIcon>

          <Nav.Link style={{ color: "black" }} as={Link} to="/admin">
            Admin
          </Nav.Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={handleLogout}>Logout</ListItemText>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
