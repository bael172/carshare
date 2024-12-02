import React from 'react';

function DateSelect({
  label,
  month,
  day,
  year,
  onMonthChange,
  onDayChange,
  onYearChange
}) {
  const currentYear = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => 
    new Date(0, i).toLocaleString('ru', { month: 'long' })
  );
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-xs text-white">{label}</label>
      <div className="flex gap-3.5">
        <select 
          className="flex gap-10 px-4 py-2 text-xs text-white whitespace-nowrap rounded-md border border-white border-solid"
          value={month}
          onChange={(e) => onMonthChange(e.target.value)}
        >
          <option value="">Месяц</option>
          {months.map((monthName, index) => (
            <option key={index} value={index + 1}>{monthName}</option>
          ))}
        </select>
        <select 
          className="flex gap-3 px-3 py-2 text-xs text-black whitespace-nowrap rounded-md bg-zinc-100"
          value={day}
          onChange={(e) => onDayChange(e.target.value)}
        >
          <option value="">День</option>
          {days.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select 
          className="flex gap-3.5 px-3.5 py-2 text-xs text-black whitespace-nowrap rounded-md bg-zinc-100"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
        >
          <option value="">Год</option>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DateSelect;