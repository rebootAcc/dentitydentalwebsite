import React from "react";
import BranchServiceCard from "../global/BranchServiceCard";
import { Treatments } from "@/lib/treatmentDataList";

const TreatmentSection = () => {
  return (
    <section className="xl:p-16 lg:p-8 p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-1">
        <h1 className="md:text-3xl text-xl font-semibold text-site-main">
          See Our Most Popular Services
        </h1>
        <p className="md:text-lg text-xs text-site-typo">
          EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the
          first thing people notice when they meet one another. Smile is
          something that can change the world. So in our DENTITY DENTAL Clinics
          we create a confident smile for you.
        </p>
      </section>
      <section className="w-full grid md:grid-cols-3 grid-cols-2 gap-2 lg:gap-4">
        {Treatments.slice(0, 6).map((item, index) => (
          <div key={index} className="">
            <BranchServiceCard content={item} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default TreatmentSection;
