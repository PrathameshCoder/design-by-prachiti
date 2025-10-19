import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import matter from "gray-matter";

type Blog = {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
  slug: string;
};

// read only .md files
const fileNames = fs.readdirSync(path.join(process.cwd(), "content"))
  .filter((f) => f.endsWith(".md"));

const blogs: Blog[] = fileNames.map((fileName) => {
  const fullPath = path.join(process.cwd(), "content", fileName);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContent);

  const slug = path.parse(fileName).name;
  const meta = data as Partial<Omit<Blog, "slug">>;

  // Build the Blog object explicitly so TS is happy
  return {
    title: meta.title ?? slug,
    description: meta.description ?? "",
    author: meta.author ?? "",
    date: meta.date ?? "",
    image: meta.image,
    slug,
  };
});

export default function BlogPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-background text-foreground">
      <h1 className="text-2xl md:text-5xl font-bold mb-10 text-center">Blogs</h1>

      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogpost/${blog.slug}`} className="group">
            <article
              className="flex flex-col md:flex-row bg-card rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
              style={{ minHeight: 220 }}
            >
              <div className="md:w-2/5 w-full h-56 md:h-56 overflow-hidden">
                <img
                  src={
                    blog.image?.trim()
                      ? blog.image
                      : "https://source.unsplash.com/600x400/?interior,design"
                  }
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between p-6 md:w-3/5 w-full">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="mb-4">{blog.description}</p>
                  <p className="text-xs opacity-70">{blog.date}</p>
                </div>
                <span className="text-sm opacity-80">By {blog.author}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
