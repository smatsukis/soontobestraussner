export default function Checkbox({ children, ...props }) {

    return (
      <label className="block truncate">
        <input
          type="checkbox"
          className={`rounded-full border-gray-300 text-stone-400 shadow-sm focus:ring-stone-400 focus:ring focus:ring-offset-0 focus:border-stone-400 focus:ring-opacity-50`}
          value={children}
          {...props}
        />
        <span className="ml-2 text-sm">{children}</span>
        <br />
      </label>
    );
  }
  