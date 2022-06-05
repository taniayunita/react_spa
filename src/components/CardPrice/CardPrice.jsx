import React from "react";
import "./CardPrice.css";

const Card = ({ title, price, periode, tagline, facilities }) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    })
      .format(value)
      .replace(/(\.|,)00$/g, "");

  return (
    <>
      <div className="pricelist">
        <h3 className="font-outline uppercase text-xl">{tagline}</h3>
        <div className="card">
          <div>
            <div className="text-center container-title-price">
              <div className="h-16 items-center flex justify-center">
                <h3
                  className="
                        font-bold
                        text-orange-primary text-xl
                        uppercase
                        "
                >
                  {title}
                </h3>
              </div>
              <h3 className="text-white text-xl capitalize">
                <span className=" font-bold">{numberFormat(price)}</span>/
                {periode}
              </h3>
            </div>
            <div className="container-facilities">
              {facilities.map((item, index) => {
                return (
                  <div className="text-white flex py-1 facilities" key={index}>
                    <div className="pt-1 pr-4">
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="layer"></div>
          <div className="container-title-layer">
            <h2 className="uppercase font-bold title-layer">proceed & pay</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
