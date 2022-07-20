import React from "react";
import NewCompond from "./NewCompond";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

export default function PriceCard() {
  var data = [
    {
      First: "Free",
      price: "0",
      User: "Single User",
      userbold: false,
      UserEnab: true,
      Storage: "5GB Storage",
      storageEnab: true,
      public: "Unlimited Public Project",
      publicEnab: true,
      Access: "community access",
      accessEnab: true,
      Private: "unlimited Private Project",
      privatEnab: false,
      Phone: "Dedicated  Phone Support ",
      phoneEnab: false,
      Subdomain: "Free Subdomain ",
      subdomainEnab: false,
      Status: "Monthly Status Reports ",
      statusEnab: false,
    },
    {
      First: "paid",
      price: "9",
      User: "5 User",
      userbold: true,
      UserEnab: true,
      Storage: "50GB Storage",
      storageEnab: true,
      public: "Unlimited Public Project",
      publicEnab: true,
      Access: "community access",
      accessEnab: true,
      Private: "unlimited Private Project",
      privateEnab: true,
      Phone: "Dedicated  Phone Support ",
      phoneEnab: true,
      Subdomain: "Free Subdomain ",
      subdomainEnab: true,
      Status: "Monthly Status Reports",
      statusEnab: false,
    },
    {
      First: "paid",
      price: "49",
      User: "Unlimited User",
      userbold: true,
      UserEnab: true,
      Storage: "150GB Storage",
      storageEnab: true,
      public: "Unlimited Public Project",
      publicEnab: true,
      Access: "community access",
      accessEnab: true,
      Private: "unlimited Private Project",
      privateEnab: true,
      Phone: "Dedicated  Phone Support ",
      phoneEnab: true,
      Subdomain: " Unlimited Free Subdomain ",
      subdomainEnab: true,
      Status: "Monthly Status Reports",
      statusEnab: true,
    },
  ];

  return (
    <section class="pricing py-5 ">
      <div class="container">
        <div class=" row row-cols-3">
          {data.map((e) => {
            return <NewCompond data={e} />;
          })}
        </div>
      </div>
    </section>
  );
}
