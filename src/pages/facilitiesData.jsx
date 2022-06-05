import React from "react";

import { BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export const facilities = {
  all: [
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          <span className="font-bold">Promote yourself</span> & reach thausands
          of user globaly
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          Accept
          <span className="font-bold"> payments</span>
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          Both
          <span className="font-bold"> in person</span> &{" "}
          <span className="font-bold">virtual trainings</span>
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          Access to
          <span className="font-bold"> manager customers health profile</span>
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          <span className="font-bold">Verified</span> profile
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          {" "}
          Access to
          <span className="font-bold"> weekly newsletters</span>
        </p>
      ),
    },
  ],
  limit: [
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          <span className="font-bold">Promote yourself</span> & reach thausands
          of user globaly
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          Accept
          <span className="font-bold"> payments</span>
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          Both
          <span className="font-bold"> in person</span> &{" "}
          <span className="font-bold">virtual trainings</span>
        </p>
      ),
    },
    {
      icon: <BsCheck2 />,
      desc: (
        <p>
          Access to
          <span className="font-bold"> manager customers health profile</span>
        </p>
      ),
    },
    {
      icon: (
        <span className="text-secondary">
          <MdClose />
        </span>
      ),
      desc: (
        <p className="text-secondary">
          <span className="font-bold">Verified</span> profile
        </p>
      ),
    },
    {
      icon: (
        <span className="text-secondary">
          <MdClose />
        </span>
      ),
      desc: (
        <p className="text-secondary">
          {" "}
          Access to
          <span className="font-bold"> weekly newsletters</span>
        </p>
      ),
    },
  ],
};
