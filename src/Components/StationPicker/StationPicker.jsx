import React from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function StationPicker(props) {
  let printStations = () => {
    return props.allStations.map((eachStation, i) => {
      return (
        <Dropdown.Item href={`#/ride/${eachStation.StationID}`} key={i}>
          {eachStation.Station}
        </Dropdown.Item>
      );
    });
  };

  let buildDropdown = () => {
    return (
      <DropdownButton id="dropdown-basic-button" title="Choose Your Station">
        {printStations()}
      </DropdownButton>
    );
  };
  return <div>{buildDropdown()}</div>;
}
