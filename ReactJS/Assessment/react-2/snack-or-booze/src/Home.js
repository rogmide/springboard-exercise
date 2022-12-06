import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// import FoodMenu from "./FoodMenu";
// import DrinkMenu from "./DrinkMenu";
import GeneralMenu from "./GeneralMenu";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <div style={{ display: "Flex", justifyContent: "center" }}>
        {/* <FoodMenu snacks={snacks} />
        <DrinkMenu drinks={drinks} /> */}
        <GeneralMenu items={snacks} foodType="snacks" />
        <GeneralMenu items={drinks} foodType="drinks" />
      </div>
    </section>
  );
}

export default Home;