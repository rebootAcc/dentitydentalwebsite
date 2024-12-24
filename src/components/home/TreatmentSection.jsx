import React from "react";
import BranchServiceCard from "../global/BranchServiceCard";

const TreatmentSection = () => {
  const Treatments = [
    {
      label: "Dental Implant",
      href: "/treatments/dental-implant",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/dental-implant.jpg",
      desc: "Some people don't prefer or the oral condition may not be suitable for Dentures or Fixed Bridges.For them we have other best solution known as DENTAL IMPLANT.",
    },
    {
      label: "Cosmetic Dentistry",
      href: "/treatments/cosmetic-intraoral-surgery",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/Cosmetic-Dentistry.jpg",
      desc: "It is performed to give good looks especially smile without hampering oral health. There are wide range of cosmetic intraoral surgical works performed by oral surgeons who are highly skilled in this field",
    },
    {
      label: "Root Canal",
      href: "/treatments/root-canal",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/root-canal.jpg",
      desc: "Root Canal Treatment (RCT)or Endodontic Therapy of the tooth is a high expertise, specialized & conservative approach to keep/save/preserve the tooth in its original position of the oral cavity both functionally & esthetically. ",
    },
    {
      label: "Dentures",
      href: "/treatments/removable-denture-cast-partial-denture-and-flexible-partial-denture",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/Dentures.jpg",
      desc: "Denture means the replacement of one or more lost/missing original tooth/teeth due to some reason by artificial substitutes which are cosmetically same as natural teeth.",
    },
    {
      label: "Oral Surgery",
      href: "/treatments/oral-and-maxillofacial-surgery",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/oral-surgery.jpg",
      desc: "This is highly specialized section which encompasses Dentofacial Surgery,Oral &Dental Surgery, Maxillofacial Surgery, Orthogna thik Surgery etc.If some individual get accidental traumatic injury",
    },
    {
      label: "Geriatric Dentistry",
      href: "/treatments/geriatric-dentistry",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/General-Dentistry.jpg",
      desc: "It is the branch of dentistry that provide preventive & curative dental treatment of older or extremely older patients.Usually that age group of people suffer from compromised general physical (& sometime mental )health, poor oral health, nutritional deficiency , restricted day to day activities.",
    },
  ];
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
