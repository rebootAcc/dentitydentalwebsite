import { Blogs } from "@/lib/blogDataList";
import BlogCard from "./BlogCard";

export default function SimilarBlogs({ currentQuery }) {
  const relatedBlogs = Blogs.filter(
    (blog) => !blog.href.includes(currentQuery)
  );

  return (
    <section className="flex flex-col relative gap-3 lg:gap-5 p-4">
      <h1 className="text-lg md:text-3xl font-medium text-site-main text-center">
        Related Blogs
      </h1>
      {relatedBlogs.length > 0 &&
        relatedBlogs.slice(0, 2).map((blog, index) => (
          <div className="h-full cursor-pointer" key={index}>
            <BlogCard blog={blog} />
          </div>
        ))}
    </section>
  );
}
