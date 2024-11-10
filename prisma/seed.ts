import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "This is the content of post 1",
    published: true,
    author: {
      connectOrCreate: {
        where: {
          email: "john@gmail.com",
        },
        create: {
          name: "John Davies",
          hashedPassword: "123456",
          email: "john@gmail.com",
        },
      },
    },
  }
];


async function main() {
   console.log("Start Seeding database...");
   for (const post of initialPosts) {     
      
      const newPost = await prisma.post.create({
        data: post,
      })
      console.log(`Created post with id: ${newPost.id}`);
   }
   console.log("Finished Seeding database...");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
