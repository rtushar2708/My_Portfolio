"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="container mx-auto text-center">
        <p className="text-gray-300 text-sm">© {currentYear} Tushar Rajput. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-2">Designed and built with ❤️</p>
      </div>
    </footer>
  );
}