import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image";

export default function BlogComponent({ profile, name, position }: blogType) {
  return (
    <>
      <Image
        width={250}
        height={250}
        loading="eager"
        src={profile}
        alt={"Image of : " + name}
      />
      <hr />
      <h1>Name : {name}</h1>
      <h2>Position : {position}</h2>
    </>
  );
}
