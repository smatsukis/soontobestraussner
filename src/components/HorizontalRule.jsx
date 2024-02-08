

export default function HorizontalRule({ children, ...props }) {
    // const isLgOrXl = useBreakpoint('(min-width: 1024px)');

    return (
        <div className="flex items-center">
          
        {/* <div className="">
          <img src="/daisy.png" alt="Daisy" className="w-8 h-8 rounded-full" />
        </div> */}
      
  <div className="flex-1">
  <hr className="border-t-4 border-zinc-800" />
  </div>
  <div className="">
    <img src="/daisy.png" alt="Daisy" className="w-8 h-8 rounded-full" />
  </div>
</div>

        
    );
  }


