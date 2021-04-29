import React from "react";
import "./packages.scss";
import DashBoard from "../../layouts/dashboard/dashboard";
import GridItems from "../../components/griditems/griditems";


const Packages = () => {
  return (
    <DashBoard>
    <div className="packages">
      <GridItems title = 'Docker' subject="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"/>
      <GridItems title = 'Apache' subject="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"/>
      <GridItems title = 'Nuget' subject="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"/>
      <GridItems title = 'RubyGems' subject="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"/>
      <GridItems title = 'npm' subject="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"/>
      <GridItems title = 'Containers' subject="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli"/>

    </div>
  </DashBoard>
  );
};
export default Packages;
