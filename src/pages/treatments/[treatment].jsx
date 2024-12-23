import SubBanner from "@/components/global/SubBanner";
import RelatedTreatment from "@/components/treatments/RelatedTreatment";
import TreatMentAbout from "@/components/treatments/TreatMentAbout";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { Treatments as AllTreatments } from "@/lib/treatmentDataList";

export default function Treatments({
  metatitle,
  metadescription,
  title,
  description,
  cover,
  href,
}) {
  return (
    <WebsiteTemplate
      title="Our Treatments"
      description="Dentity Dental designed & developed by Reboot AI Private Limited"
    >
      <SubBanner heading="Treatment" />
      <TreatMentAbout title={title} description={description} cover={cover} />
      <RelatedTreatment />
    </WebsiteTemplate>
  );
}

export const getStaticPaths = async () => {
  // Define 5 static paths for your services
  const paths = AllTreatments.map((item) => {
    return {
      params: { treatment: item.href.split("/")[2] },
    };
  });

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  const treatmentData = AllTreatments.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      metatitle:
        "Website Development Company in Kolkata - Custom Website Development",
      metadescription:
        "Looking for an experienced custom website development company to build a unique online presence with Reboot AI's Custom Website Development services.",
      title: item.label,
      description: item.desc,
      cover: item.cover,
      href: item.href,
    };
    return acc;
  }, {});

  const { treatment } = params;

  // Fetch data based on the treatment slug
  const data = treatmentData[treatment];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      metatitle: data.metatitle,
      metadescription: data.metadescription,
      title: data.title,
      description: data.description,
      cover: data.cover,
      href: data.href,
    },
  };
};
