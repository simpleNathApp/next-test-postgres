import { createPost } from "@/actions/actions";

const CreatePostForm = () => {
  return (
    <form
      action={createPost}
      className="flex flex-col gap-4 border-t border-b border-black/10 leading-8 px-2 w-[600px] md:w-[900px] mb-16"
    >
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
        type="submit"
        className="bg-blue-500 text-white rounded-md p-2 mt-2"
      >
        Create Post
      </button>
    </form>
  );
}

export default CreatePostForm;