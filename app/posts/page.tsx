import { createPost } from '@/actions/actions';
import prisma from '@/lib/db';
import Link from 'next/link'

const PostsPage = async () => {

  //const posts = await prisma.post.findMany();

  const user = await prisma.user.findUnique({
    where: 
    { email: 'john@gmail.com' },
    include: {
      posts: true,
    }
  });

const userPostsLength =  user?.posts.length;
  
  return (

    <div className="flex flex-col gap-8 items-center pt-16 justify-center align-center">
      <h1 className='text-3xl font-semibold'>All Posts ({userPostsLength ? userPostsLength : 0})</h1>

      <ul className="flex flex-col gap-4 border-t border-b border-black/10 py-4 leading-8">
        { user?.posts.map((post) => {
          return <li key={post.id}  className="flex items-center gap-4 justify-between px-5">
        <Link href={`/posts/${post.slug}`}className="text-blue-500 hover:underline">
            {post.title}
          </Link>
        </li> 
        })
        }   
      </ul>

      <form 
        action={createPost}
        className='flex flex-col gap-4 border-t border-b border-black/10 py-4 leading-8 px-5 w-[300px]'>
        <input 
          type="text"
          name="title"
          placeholder="Title" 
          className="border border-black/10 rounded-md p-2 "
        />
        <textarea 
          name="content"
          rows={5}
          placeholder="Content"
          className="border border-black/10 rounded-md p-2 mt-2"
          id=""
        />
        <button
          type='submit' 
          className='bg-blue-500 text-white rounded-md p-2 mt-2'
        >
          Create Post
        </button>
      </form>
    </div>
  )
}

export default PostsPage