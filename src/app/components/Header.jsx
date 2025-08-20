import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          <Image src="/AQI_LOGO.png" alt="AirSense Logo" width={80} height={80} />
        </h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Report</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
