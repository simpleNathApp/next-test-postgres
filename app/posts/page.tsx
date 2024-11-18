
import prisma from '@/lib/db';
import Link from 'next/link'
import CreatePostForm from './postComponents/CreatePost';

const PostsPage = async () => {

  const user = await prisma.user.findUnique({
    where: 
    { email: 'john@gmail.com' },
    include: {
      posts: true,
    }
  });
  
  return (
    <div className="flex flex-col gap-8 items-center pt-16 justify-center align-center">
      <h1 className="text-3xl font-semibold">
        All Posts ({user?.posts.length})
      </h1>

      <ul className="flex flex-col gap-4 border-t border-b border-black/10 py-4 leading-8">
        {user?.posts.map((post) => {
          return (
            <li
              key={post.id}
              className="flex items-center gap-4 justify-between px-5"
            >
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <CreatePostForm /> 
    </div>
  );
}

export default PostsPage