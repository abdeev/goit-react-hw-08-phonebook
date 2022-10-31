import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import AuthUserMenu from 'components/UserMenu/AuthUserMenu';
import UnauthUserMenu from 'components/UserMenu/UnauthUserMenu';
import { selectAuth } from 'redux/auth/authSelector';
import { Grid } from '@mui/material';

const LayoutPage = () => {
  const isLoggedIn = useSelector(selectAuth);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        {isLoggedIn.token ? <AuthUserMenu /> : <UnauthUserMenu />}
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LayoutPage;
