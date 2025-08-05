// components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
        <p>© {currentYear} AirSense. All rights reserved.</p>
        <p className="text-gray-400">Project by Sahana M N</p>
      </div>
    </footer>
  );
}
