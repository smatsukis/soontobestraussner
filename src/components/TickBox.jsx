export default function Checkbox({ children, ...props }) {

    return (
      <label className="block truncate">
        <input
          type="checkbox"
          className={`rounded-full border-gray-300 text-champagne shadow-sm focus:ring-champagne focus:ring focus:ring-offset-0 focus:border-champagne focus:ring-opacity-50`}
          value={children}
          {...props}
        />
        <span className="ml-2 text-sm">{children}</span>
        <br />
      </label>
    );
  }
  