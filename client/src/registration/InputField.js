import React from 'react';

function InputField({
  label,
  required = false,
  type = "text",
  placeholder = "",
  id,
  value,
  onChange
}) {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex gap-3 text-xs text-white whitespace-nowrap">
        <label htmlFor={id}>{label}</label>
        {required && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee536d57aa9d82175c73564ed083cb7ac7cfc8196ec6310c80bc310289d7d8b3?placeholderIfAbsent=true&apiKey=4968924d5e6f4616b86f6c27577b78a3"
            alt="Required field indicator"
            className="object-contain shrink-0 my-auto aspect-square w-[9px]"
          />
        )}
      </div>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex shrink-0 mt-2 w-full rounded-md bg-zinc-100 h-[30px] px-3"
        required={required}
        aria-required={required}
      />
    </div>
  );
}

export default InputField;