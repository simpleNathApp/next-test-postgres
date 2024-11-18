import CreatePostForm from "@/app/posts/postComponents/CreatePost";
import prisma from "@/lib/db";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Dashboard = async () => {
  const user = await prisma.user.findUnique({
    where: { email: 'john@gmail.com'},
    include: {
      posts: true,
    },
  });

  const posts = await prisma.post.findMany();

  return (
    <>
      <div className="flex flex-col gap-4 items-center pt-4 justify-center align-center bg-lime-100 ">
        <h1 className="text-3xl font-semibold border shadow-lg py-4 px-8">
          Users Posts ({posts?.length})
        </h1>
        <div className="md:px-16 py-8 w-full">
          <div className="shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Author
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Post Title
                  </th>
                  <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Post content
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {user?.posts.map((post) => (
                  <tr key={post.id}>
                    <td className="w-1/3 text-left py-3 px-4">{user?.name}</td>
                    <td className="w-1/3 text-left py-3 px-4">{post.title}</td>
                    <td className="w-1/3 text-left py-3 px-4">
                      <Link href={`/dashboard/posts/${post.slug}`}>
                        {" "}
                        View Post
                        <IoIosArrowForward className="inline-block ml-2 hover:text-blue-700" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <CreatePostForm />
      </div>
    </>
  );
};

export default Dashboard;
