'use client';
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg p-2 w-60 shadow-sm focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
    />
  );
}