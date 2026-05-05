import { useState } from "react";

function CategoryDropdown({ type, categories, value, onChange, onCreateCategory }) {
  const [isCustom, setIsCustom] = useState(false);
  const [customValue, setCustomValue] = useState("");

  const options = categories(type);

  const handleSelect = (e) => {
    const selected = e.target.value;

    if (selected === "custom") {
      setIsCustom(true);
      onChange("");
    } else {
      setIsCustom(false);
      onChange(selected);
    }
  };

  const handleAddCustom = () => {
    if (!customValue.trim()) return;

    onCreateCategory(type, customValue);
    onChange(customValue);
    setCustomValue("");
    setIsCustom(false);
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-slate-700">
        Category
      </label>

      {/* DROPDOWN */}
      <select
        value={value}
        onChange={handleSelect}
        className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
      >
        {options.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}

        <option value="custom">+ Add new category</option>
      </select>

      {/* CUSTOM INPUT */}
      {isCustom && (
        <div className="flex gap-2">
          <input
            type="text"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            placeholder="Enter new category"
            className="flex-1 rounded-3xl border border-slate-300 px-4 py-3"
          />

          <button
            type="button"
            onClick={handleAddCustom}
            className="rounded-2xl bg-indigo-500 px-4 py-2 text-white"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;