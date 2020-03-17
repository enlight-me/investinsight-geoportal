import React from "react";
import PropTypes from "prop-types";

import MenuPanel from "terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx";
import PanelStyles from "terriajs/lib/ReactViews/Map/Panels/panel.scss";
import Styles from "./related-maps.scss";
import classNames from "classnames";

function RelatedMaps(props) {
  const dropdownTheme = {
    inner: Styles.dropdownInner,
    icon: "gallery"
  };

  return (
    <MenuPanel
      theme={dropdownTheme}
      btnText="Related Maps"
      smallScreen={props.smallScreen}
      viewState={props.viewState}
      btnTitle="See related maps"
    >
      <div className={classNames(PanelStyles.header)}>
        <label className={PanelStyles.heading}>Related Maps</label>
      </div>

      <p>Clicking on a map below will open it in a separate window or tab.</p>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://maps.digitalearth.africa/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/de-africa.png")}
            alt="DEAfrica"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://www.digitalearthafrica.org/"
        >
          DEAfrica
        </a>

        <p>
          The Digital Earth Africa (DE Africa) Map is a website for map-based
          access to spatial data. It’s developed by Data61 CSIRO in
          collaboration with Geoscience Australia and aims to provide easy
          access to spatial data on the African continent to help increase an
          understanding of using satellite data for better decisions.
        </p>
      </div>

      <div className={classNames(PanelStyles.section, Styles.section)}>
        <a target="_blank" href="https://www.nationalmap.gov.au/investormap/">
          <img
            className={Styles.image}
            src={require("../../wwwroot/images/investor-banner.svg")}
            alt="DEAfrica"
          />
        </a>

        <a
          target="_blank"
          className={Styles.link}
          href="https://www.nationalmap.gov.au/investormap/"
        >
          Australia InvestorMap
        </a>

        <p>
          The Investor Map is a website for map-based access to spatial data
          from Australian government agencies. It is an initiative of the
          Australian Trade and Investment Commission (Austrade), developed by
          Data61 CSIRO in collaboration with Geoscience Australia. <br />
          The Investor Map is an extension of the Australian Government’s
          NationalMap initiative. It aims to provide easy access to spatial and
          other data on Australia to help encourage investment across the
          country.
        </p>
      </div>
    </MenuPanel>
  );
}

RelatedMaps.propTypes = {
  viewState: PropTypes.object.isRequired,
  smallScreen: PropTypes.bool
};

export default RelatedMaps;
