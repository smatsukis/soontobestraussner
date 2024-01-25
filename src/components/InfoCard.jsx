export default function InfoCard({ children, includeImage, image, ...props }) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl font-minimal flex-1">
  <div className="md:flex">
    {includeImage && (
      <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-72" src={image}/>
    </div>
    )}
    
    <div className="p-8">
      {children}

      

    
    </div>
  </div>
</div>
    );
  }