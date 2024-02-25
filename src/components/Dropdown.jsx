export default function Dropdown({
    children,
    dropdownValues,
    defaultValue,
    ...props
  }) {
  
    return (
      <div className="relative">
        <select
          className={`peer mt-1 block mb-4 w-full rounded-sm border-zinc-800 shadow-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50`}
          {...props}
        >
          <option>{defaultValue}</option>
          {dropdownValues.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
    );
  }
  