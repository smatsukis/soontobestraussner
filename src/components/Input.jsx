export default function Input({ children, ...props }) {

    return (
      <div className="relative">
        <input
          className={`peer mt-1 block w-full rounded-sm border-zinc-800 shadow-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50 mb-5`}
          placeholder={children}
          {...props}
        />
      </div>
    );
  }
  