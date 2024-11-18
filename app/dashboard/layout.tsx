import SideNav from "@/app/_components/sidenav";
//import Navbar from "../components/Navbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="w-full flex-grow p-2  md:p-4">{children}</div>
    </div>
  );
}
