import Image from "next/image";
import { useRouter } from "next/router";
import { MdArrowOutward, MdOutlineRemoveRedEye } from "react-icons/md";

export default function BlogCard({ blog }) {
  const router = useRouter();
  function handelRedirect(href) {
    router.push(href);
  }
  return (
    <div
      className="bg-white shadow-custom p-4 h-full flex flex-col w-full gap-3 my-4"
      onClick={() => handelRedirect(blog.href)}
    >
      <div>
        <div className="relative min-h-[15rem]">
          <Image
            fill
            src={blog.img}
            alt="blog cover"
            className="object-cover !h-[15rem]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 h-[2.5rem]">
        <div className="flex items-center gap-1 text-[11px]">
          <span className="relative px-6 py-0.5 bg-site-sub text-white xl:text-sm text-xs rounded-full font-medium">
            {blog.createdAt}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-site-sub text-white">
            <MdOutlineRemoveRedEye />
          </span>
          <span className="text-site-typo font-medium">
            {blog.viewsCount} Views
          </span>
        </div>
      </div>
      <h1 className="text-site-main text-base lg:text-lg font-medium line-clamp-1">
        {blog.heading}
      </h1>
      <p
        className="text-site-typo text-base line-clamp-2"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></p>
      <div className="flex justify-between">
        <span className="font-medium text-site-main text-base">Read More</span>
        <span className="text-white bg-site-main rounded-full p-2 text-sm inline-flex items-center gap-1">
          <MdArrowOutward className="text-lg" />
        </span>
      </div>
    </div>
  );
}
