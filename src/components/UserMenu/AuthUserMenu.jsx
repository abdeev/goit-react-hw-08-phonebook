import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logOutThunk } from 'redux/auth/authThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from 'redux/auth/authSelector';
import { SwitchAccount } from '@mui/icons-material';
import { Container } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectAuth);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async () => {
    try {
      await dispatch(logOutThunk()).unwrap();

      navigate('/login', { replace: true });
    } catch (error) {}
    setAnchorEl(null);
  };

  return (
    <Container>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SwitchAccount />
        {`${userName.user.name} profile menu`}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Container>
  );
}
