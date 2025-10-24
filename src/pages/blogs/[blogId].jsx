import SimilarBlogs from "@/components/blogs/SimilarBlogs";
import EnquiryBox from "@/components/global/EnquiryBox";
import SubBanner from "@/components/global/SubBanner";
import { Blogs } from "@/lib/blogDataList";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import Image from "next/image";

export default function BlogDetails({
  metatitle,
  metadescription,
  title,
  description,
  cover,
}) {
  return (
    <WebsiteTemplate title={metatitle} description={metadescription}>
      <SubBanner heading={`Dentity Dental Blogs | ${title}`} />
      <main className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[75%]">
            <h1 className="text-3xl font-medium text-site-main">{title}</h1>
            <Image
              src={cover}
              alt={title}
              width={2400}
              height={1600}
              className="w-full md:h-[25rem] object-contain rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <p
                className="text-site-typo text-lg"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6 md:w-[40%] lg:w-[25%]">
            <div className="">
              <SimilarBlogs />
            </div>
            <div>
              <EnquiryBox />
            </div>
          </div>
        </div>
      </main>
    </WebsiteTemplate>
  );
}

export const getStaticPaths = async () => {
  // Define 5 static paths for your services
  const paths = Blogs.map((item) => {
    return {
      params: { blogId: item.href.split("/")[2] },
    };
  });

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  const treatmentData = Blogs.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      metatitle: item.metatitle,
      metadescription: item.metadescription,
      title: item.heading,
      description: item.blogDescription,
      cover: item.img,
    };
    return acc;
  }, {});

  const { blogId } = params;

  // Fetch data based on the treatment slug
  const data = treatmentData[blogId];

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
    },
  };
};
