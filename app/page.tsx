import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-6">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to my website!
        </h1>
        <Link href="/about" className="text-blue-500 hover:underline">
          About me
        </Link>
        <Link href="/posts" className="text-blue-500 hover:underline">
          View Posts
        </Link>
      </main>
    </div>
  );
}
