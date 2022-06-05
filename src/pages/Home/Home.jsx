import React from "react";

import { BsArrowUpLeft } from "react-icons/bs";

import Card from "../../components/CardPrice/CardPrice";
import { facilities } from "../facilitiesData";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <header className="flex py-6">
          <div className="text-2xl text-orange-primary rotate-[-45deg] pr-6">
            <BsArrowUpLeft />
          </div>
          <div className="text-3xl font-bold text-white">Dragatron.</div>
        </header>
        <section className="ml-52">
          <p className="uppercase text-white font-bold text-3xl py-9">
            sign up as a{" "}
            <span className="text-orange-primary">profesional</span>
          </p>
          <p className="uppercase text-white pb-9">
            <span className="text-orange-primary">step 3/4 </span>select trainer
            subscription
          </p>
          <p className="text-white pb-6">
            With 3 types of memberships,{" "}
            <span className="text-orange-primary">
              Discover the membership which fits your personal needs
            </span>
          </p>
          <div className="flex pb-6">
            <Card
              title="access all membership"
              price="299"
              periode="Month"
              facilities={facilities.all}
            />
            <Card
              title="in person training membership"
              price="199"
              periode="Month"
              tagline="popular."
              facilities={facilities.limit}
            />
            <Card
              title="virtual training"
              price="99"
              periode="Month"
              facilities={facilities.limit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
