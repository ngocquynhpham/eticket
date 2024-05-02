import React from "react";
import Image from "next/image";
import { ArrowLeft, Scale } from "lucide-react";
import Link from "next/link";

const TermsCondition = () => {
  return (
    <div className="p-4 flex flex-col items-center gap-6">
       <Link className="flex gap-4 items-center w-full" href="/create-ticket">
       <ArrowLeft />
        <span className="hidden sm:inline">Back</span>
      </Link>
      <div className="flex justify-center items-center w-full gap-2 my-2">
        <Scale strokeWidth={2.5} size={30} className="text-primary" />
        <h1 className="text-primary font-bold text-xl">Terms & Condition</h1>
      </div>
      <Image
        src="/imgs/terms.jpg"
        width={380}
        height={200}
        alt="Terms Condition"
      />
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-bold">Conditions of carriage</h3>
        <p>
          Helpdesk applies some security conditions apply to ensure the safety
          of supported customers. Please, see more details{" "}
          <Link className="text-primary" href={"/"}>
            here
          </Link>
          .
        </p>
        <h3 className="font-bold">
          Criteria and Conditions for Online Booking
        </h3>
        <p>
          Please see details on conditions for using the booking system {" "}
          <Link className="text-primary" href={"/"}>
            here
          </Link>
          .
        </p>
        <h3 className="font-bold">
          Conditions for using our website and E-Commerce App
        </h3>
        <p>
          We apply the{" "}
          <Link className="text-primary" href={"/"}>
            conditions
          </Link>{" "}
          to users of the Vietnam Airlines website and E-Commerce App to ensure
          their benefits.
        </p>
      </div>
    </div>
  );
};

export default TermsCondition;
