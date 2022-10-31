import { Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';

const UnauthUserMenu = () => {
  return (
    <Grid display="flex">
      <NavLink to="/" end>
        <Tab label="Sign Up" />
      </NavLink>
      <NavLink to="login">
        <Tab label="Sign In" />
      </NavLink>
    </Grid>
  );
};

export default UnauthUserMenu;
