import Sidebar from "@/components/Sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full overflow-hidden max-h-dvh">
      <Sidebar />
      {children}
    </main>
  );
}
