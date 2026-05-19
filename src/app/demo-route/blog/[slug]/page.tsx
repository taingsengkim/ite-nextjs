import BlogDetailDummy from "@/components/BlogDetailDummy";

export default async function BlogSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>This is in dynamic route ( [slug] )</h1>
      <BlogDetailDummy id={slug} />
    </div>
  );
}
