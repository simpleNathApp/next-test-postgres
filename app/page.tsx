import Link from "next/link";
import Image from "next/image";
import Navbar from "./_components/Navbar";
import { lusitana } from "./fonts/fonts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 pt-2 border border-gray-200">
      <div className="flex h-16 shrink-0 justify- items-end rounded-lg bg-blue-500 md:h-36">
        {<Navbar />}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className}`}>
            <strong>Welcome to Lome.</strong> This is a place to Visit{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              very often
            </a>
            , for your Vacations.
          </p>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <button className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-2 md:w-3/5 md:px-4 md:py-2">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.jpg"
            width={1920}
            height={990}
            className="hidden md:block rounded-md"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.jpg"
            width={560}
            height={620}
            className="md:hidden border-2 border-gray-200 rounded-md"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <div className="bg-gray-50 flex flex-col p-2 md:flex-row md:items-center md:justify-between md:p-4 mt-2 md:mt-4">
        <div>
          <h1 className="text-blue-600 text-xl font-bold text-center  sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl rounded p-4">
          Let us Make our Tour Now!
          </h1>
        </div>

        <Link href="/posts" className="text-blue-500 hover:underline">
          View Posts
        </Link>
        <Link href="/dashboard/posts" className="text-blue-500 hover:underline">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
