import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { Login, Logout } from 'components/auth';
import { Link } from 'components/elements';
import darkTheme from 'styles/theme';

const CdsHeader = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <header className="cds-header">
          <div className="cds-header__cdsbanner">
            <div className="cds-header__cdsbanner-wrapper">
              <div className="cds-header__cdsbanner-text">
                <a href="/" alt="home">
                  <div className="text-top">Indiana University</div>
                  <div className="text-bottom">Clinical Decision Support Authoring</div>
                </a>
              </div>

              <div className="cds-header__cdsbanner-auth">
                {isAuthenticated ? <Logout /> : <Login />}
              </div>
            </div>
          </div>
        </header>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CdsHeader;
