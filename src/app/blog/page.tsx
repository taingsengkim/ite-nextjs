import BlogComponent from "@/components/BlogComponents";
import { blogType } from "@/lib/blog/blog-type";

export default function BlogPage() {
  const blogs: blogType[] = [
    {
      profile:
        "https://i.pinimg.com/736x/f6/3b/28/f63b28c4d81302304602d36b70d4d3fb.jpg",
      name: "Menghor",
      position: "Senior Java Developer",
    },
    {
      profile:
        "https://i.pinimg.com/736x/f6/3b/28/f63b28c4d81302304602d36b70d4d3fb.jpg",
      name: "Menghor",
      position: "Senior Java Developer",
    },
    {
      profile:
        "https://i.pinimg.com/736x/f6/3b/28/f63b28c4d81302304602d36b70d4d3fb.jpg",
      name: "Menghor",
      position: "Senior Java Developer",
    },
    {
      profile:
        "https://i.pinimg.com/736x/f6/3b/28/f63b28c4d81302304602d36b70d4d3fb.jpg",
      name: "Menghor",
      position: "Senior Java Developer",
    },
    {
      profile:
        "https://i.pinimg.com/736x/f6/3b/28/f63b28c4d81302304602d36b70d4d3fb.jpg",
      name: "Menghor",
      position: "Senior Java Developer",
    },
    {
      profile:
        "https://i.pinimg.com/736x/f6/3b/28/f63b28c4d81302304602d36b70d4d3fb.jpg",
      name: "Menghor",
      position: "Senior Java Developer",
    },
  ];
  return (
    <div className=" container m-auto ">
      <div className="flex gap-10 flex-wrap justify-center">
        {blogs?.map((d, _index) => (
          <BlogComponent
            profile={d.profile}
            name={d.name}
            position={d.position}
            key={_index}
          />
        ))}
      </div>
    </div>
  );
}
