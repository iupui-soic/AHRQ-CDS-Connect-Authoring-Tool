import React from 'react';

export default function AhrqHeader() {
  return (
    <div className="ahrq">
      <div className="usa-banner usa-banner-bg">
        <div className="usa-accordion usa-accordion-text-color">
          <header className="usa-banner__header">
            <div className="row no-gutters row-mobile-offset">
              <div className="col-sm-auto col-lg-auto offset-lg-1 img-icon">
                <img
                  className="usa-banner__header-flag"
                  src={`${process.env.PUBLIC_URL}/assets/images/us_flag_small.png`}
                  alt="U.S. flag"
                />
              </div>

              <div className="col-sm-10 col-lg-10 txt-gov-banner">
                <p className="usa-banner__header-text">
                  <a href="https://luddy.indianapolis.iu.edu/">Luddy School of Informatics at IU Indianapolis</a>
                </p>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div role="main" className="container-fluid js-quickedit-main-content">
        <div className="row">
          <header
            id="primary-header"
            className="header row-side-margins mobile-row-side-margins"
            role="heading"
            aria-level="1"
          >
            <div className="col-md-12">
              <div className="primary-header-wrapper">
                <div className="row">
                  <div className="col-12" style={{ textAlign: 'center' }}>
                    <div className="logo-ahrq">
                      <a href="https://luddy.indianapolis.iu.edu" style={{ textDecoration: 'none', color: '#990000', fontSize: '42px', fontWeight: 'bold', whiteSpace: 'nowrap', display: 'inline-block' }}>
                        Luddy School of Informatics
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
