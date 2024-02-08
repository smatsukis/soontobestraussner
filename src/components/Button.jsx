export default function Button({ children, disabled, ...props }) {
    return (
      <button
      className={`px-4 py-1 pt-2 pb-2 mt-5 text-sm font-semibold rounded-sm border hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        disabled
          ? "bg-zinc-200 text-gray-400 hover:bg-zinc-200 cursor-not-allowed"
          : "border-zinc-800 rounded-sm mt-5 text-zinc-800 hover:text-zinc-800 hover:border-champagne hover:bg-champagne"
      }`}
        disabled={disabled}
        {...props}
      >
        
        {children}
 
      </button>
    );
  }

  

