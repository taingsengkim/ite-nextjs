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
  ];
  return (
    <div>
      {blogs?.map((d) => (
        <BlogComponent
          profile={d.profile}
          name={d.name}
          position={d.position}
        />
      ))}
    </div>
  );
}
