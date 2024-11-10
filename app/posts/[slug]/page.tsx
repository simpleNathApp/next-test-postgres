import prisma from "@/lib/db";
import { unstable_cache as cache } from "next/cache";

const getCachedPost = cache((slug: string) => {
  return prisma.post.findUnique({
    where: {
      slug: slug, // Replace with the desired post ID
    },
    
  })
})

const SinglePostPage = async ({ params }: { params: { slug: string }}) => {
   
  /* const post = await prisma.post.findUnique({
    where: {
      slug: params.slug, // Replace with the desired post ID
    },
  }); */
  const post = await getCachedPost(params.slug); // Replace with the desired post ID

  return (
    <div className="flex flex-col gap-8 items-center pt-16 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
    </div>
  );
};

export default SinglePostPage;
