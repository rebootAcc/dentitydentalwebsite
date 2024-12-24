import ClinicDetails from "@/components/clinics/ClinicDetails";
import RelatedClinics from "@/components/clinics/RelatedClinics";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { Clinic as AllClinic } from "@/lib/clinicsDataList";

export default function Clinic({
  metatitle,
  metadescription,
  title,
  description,
  cover,
  href,
  address,
  timing,
  map,
  iframe,
  phone,
}) {
  return (
    <WebsiteTemplate
      title="Our Clinics"
      description="Dentity Dental designed & developed by Reboot AI Private Limited"
    >
      <SubBanner heading="Our Clinics" />
      <ClinicDetails
        title={title}
        description={description}
        cover={cover}
        address={address}
        timing={timing}
        map={map}
        iframe={iframe}
        phone={phone}
      />
      <RelatedClinics />
    </WebsiteTemplate>
  );
}

export const getStaticPaths = async () => {
  // Define 5 static paths for your services
  const paths = AllClinic.map((item) => {
    return {
      params: { clinic: item.href.split("/")[2] },
    };
  });

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  const clinicData = AllClinic.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      metatitle:
        "Website Development Company in Kolkata - Custom Website Development",
      metadescription:
        "Looking for an experienced custom website development company to build a unique online presence with Reboot AI's Custom Website Development services.",
      title: item.label,
      description:
        "This process comes under oral cosmetic plastic surgery. Persons with high smile line if have black or hyperpigmented gum & by profession or by passion have the urge to get a beautiful smile prefer to undergo this process.Gum depigmentation",
      cover: item.cover,
      href: item.href,
      address: item.address,
      timing: item.timing,
      map: item.map,
      iframe: item.iframeSrc,
      phone: item.phone,
    };
    return acc;
  }, {});

  const { clinic } = params;

  // Fetch data based on the treatment slug
  const data = clinicData[clinic];

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
      address: data.address,
      timing: data.timing,
      map: data.map,
      iframe: data.iframe,
      phone: data.phone,
    },
  };
};
