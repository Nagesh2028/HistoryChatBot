import Image from "next/image";
import ChatComponent from "./components/chatComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl">History Chat Application</h2>
        <ChatComponent />
      </div>
    </main>
  );
}
