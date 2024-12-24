import BlogCard from "@/components/blogs/BlogCard";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { Blogs as AllBlogs } from "@/lib/blogDataList";

export default function Blogs() {
  return (
    <WebsiteTemplate
      title={"Dentity Dental Blogs | Dental Care Tips & Updates"}
      description={
        "Explore the latest blogs by Dentity Dental. Get expert tips on oral health, dental care, and insights from the best dentists in Kolkata."
      }
    >
      <SubBanner heading="Blogs" />
      <main className="xl:p-16 lg:p-8 p-4 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 place-items-stretch gap-6">
          {AllBlogs.map((blog, index) => (
            <div className="h-full cursor-pointer" key={index}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center mt-10">
          <button className="px-4 py-2 bg-gray-300 rounded-lg mr-2 hover:bg-gray-400">
            Prev
          </button>

          <div className="flex items-center gap-2">
            {displayedPages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPageState === page
                    ? "bg-blue-600 text-white" // Active page styling
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button className="px-4 py-2 bg-gray-300 rounded-lg ml-2 hover:bg-gray-400">
            Next
          </button>
        </div> */}
      </main>
    </WebsiteTemplate>
  );
}
