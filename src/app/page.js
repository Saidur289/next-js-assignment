import getAllBlog from "@/hooks/getAllBlog";
import Link from "next/link";


export default async function Home() {
  const posts = await getAllBlog()
  console.log(posts);
  return (
  <div>
    <h1 className="text-3xl text-center py-5">Blogs Page</h1>
    <div className="p-5">
      {
        posts.map((post) => <Link href={`/${post.id}`} key={post.id}><div key={post.id}>{post.title}</div></Link>)
      }
    </div>
  </div>
  );
}
