import prisma from "@/lib/db";
import { notFound } from "next/navigation";
//import { unstable_cache as cache } from "next/cache";
//import { cache } from "@/lib/cache";

 /* const getCachedPost = cache ( async ( slug: string) => {
   return await prisma.post.findMany({
     where: {
       slug,
     },
   });
 }); 
  */
 

 export default async function SinglePostPage({ params })  {

   const { slug } = await params;
     const post = await prisma.post.findUnique({
    where: {
      slug 
    },
   })  
   if (post == null) return notFound();

  //const post =  getCachedPost(params.slug);  
  return (
    <div className="flex flex-col gap-8 items-center pt-16 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

