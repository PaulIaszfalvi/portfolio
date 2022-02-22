import React from "react";
import "./portfolio.css";
import GridItem from "./griditem";

function portfolio() {
  return (
    <div className="portfoliopage" id="portfolio">
      <div class="container horizontal-scrollable">
        <div class="row text-center">
          <div class="col-xs-12 col-md-4">
            <GridItem />
          </div>
          <div class="col-xs-12 col-md-4">
            <GridItem />
          </div>
          <div class="col-xs-12 col-md-4">
            <GridItem />
          </div>
          <div class="col-xs-12 col-md-4">
            <GridItem />
          </div>
          <div class="col-xs-12 col-md-4">
            <GridItem />
          </div>
          <div class="col-xs-12 col-md-4">
            <GridItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
