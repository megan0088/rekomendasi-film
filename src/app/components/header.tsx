// components/Header.js

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black p-4 flex justify-between items-center">
      <Link href="/" passHref>
        <div className="text-white text-lg font-semibold cursor-pointer">Rekomendasi Film</div>
      </Link>
      <div className="flex">
        <input
          type="text"
          placeholder="Cari..."
          className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-r-md">
          Search
        </button>
      </div>
    </header>
  );
}
