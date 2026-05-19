export default async function BlugSlugsCatchAll({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}) {
  // for server side we must use async await

  const { slugs } = await params;
  return (
    <div>
      <h1>This is from catch all slugs</h1>
      {slugs.map((d) => (
        <h1 className="text-2xl text-red-500">{d}</h1>
      ))}
    </div>
  );
}
