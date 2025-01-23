
import getAllBlog from "@/hooks/getAllBlog";
import Link from "next/link";


export default async function Home() {
  const posts = await getAllBlog()
  
  return (
  <div>
    <h1 className="text-3xl text-center py-5">Blogs Page</h1>
    <div className="p-5">
      {
        posts.map((post) => <Link className="pb-3" href={`/${post.id}`} key={post.id}><div className="p-5 border-2">{post.title}</div></Link>)
      }
    </div>
  </div>
  );
}
