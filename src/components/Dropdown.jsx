export default function Dropdown({
    children,
    dropdownValues,
    defaultValue,
    ...props
  }) {
  
    return (
      <div className="relative">
        <select
          className={`peer mt-1 block w-full rounded-sm border-zinc-800 shadow-sm focus:ring-stone-400 focus:ring focus:border-stone-200 focus:ring-opacity-50`}
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
  