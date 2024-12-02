import React from 'react';

function CheckboxItem({
  label,
  checked,
  onChange
}) {
  return (
    <div className="flex gap-3.5 mt-1.5 text-xs text-white">
      <input 
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="flex shrink-0 self-start w-3 h-3 bg-zinc-300"
      />
      <div className="flex-auto">
        {label}
      </div>
    </div>
  );
}

export default CheckboxItem;