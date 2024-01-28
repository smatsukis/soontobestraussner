export default function Button({ children, disabled, ...props }) {
    return (
      <button
        className={`font-minimal border py-2 px-4 border-zinc-800 rounded-sm mt-5 text-zinc-800 hover:text-zinc-800 hover:border-stone-300 hover:bg-stone-300 ${
          disabled
            && "bg-zinc-200 text-gray-400 hover:text-zinc-500 hover:bg-zinc-200 cursor-not-allowed "}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }

