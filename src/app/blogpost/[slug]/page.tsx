import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Frontmatter = {
  title?: string;
  description?: string;
  author?: string;
  date?: string;
};

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Resolve file path safely
  const filepath = path.join(process.cwd(), "content", `${slug}.md`);
  if (!fs.existsSync(filepath)) {
    notFound(); // 404 page if file isn't there
  }

  // Read + parse front-matter
  const fileContent = fs.readFileSync(filepath, "utf8");
  const { data, content: body } = matter(fileContent);
  const { title, description, author, date } = data as Frontmatter;

  return (
    <main className="prose max-w-3xl mx-auto mt-10">
      <h1>{title ?? slug}</h1>
      {description && <p>{description}</p>}
      {(author || date) && (
        <p className="text-sm opacity-70">
          {author ? `By ${author}` : null}
          {author && date ? " — " : ""}
          {date ?? ""}
        </p>
      )}

      {/* This renders the raw markdown as plain text.
          To render markdown as HTML, add a remark pipeline and use dangerouslySetInnerHTML. */}
      <pre className="whitespace-pre-wrap">{body}</pre>
    </main>
  );
}
