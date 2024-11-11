import prisma from "@/lib/db";
import { notFound } from "next/navigation";
 
 export default async function SinglePostPage({ params }: { params: { slug: string } })  {

   const { slug } = await params;
     const post = await prisma.post.findUnique({
    where: {
      slug 
    },
   })  
   if (post == null) return notFound();  
  return (
    <div className="flex flex-col gap-8 items-center pt-16 text-center">
      <h1 className="text-3xl font-semibold">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

