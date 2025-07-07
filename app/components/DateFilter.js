'use client';
export default function DateFilter({ value, onChange }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="date"
        value={value.from || ''}
        onChange={(e) => onChange({ ...value, from: e.target.value })}
        className="border rounded-lg p-2 shadow-sm"
      />
      <span className="text-gray-600">to</span>
      <input
        type="date"
        value={value.to || ''}
        onChange={(e) => onChange({ ...value, to: e.target.value })}
        className="border rounded-lg p-2 shadow-sm"
      />
    </div>
  );
}