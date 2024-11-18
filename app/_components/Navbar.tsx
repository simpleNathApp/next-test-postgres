import { lusitana } from "@/app/fonts/fonts";

export default function Navbar() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white align-center justify-center`}
    >
      <p className="text-xl md:text-[35px] mb-4 ml-6">Making a Tour on the Beach</p>
    </div>
  );
}
