export default function InfoCard({
  children,
  includeImage,
  image,
  imageRight,
  ...props
}) {
  return (
    
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl font-paragraph flex-1">
      
      <div className="md:flex">
        {includeImage && !imageRight && (
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-72"
              src={image}
            />
          </div>
        )}

        <div className="p-8">{children}</div>

        {includeImage && imageRight && (
          <div className="md:shrink-0 self-end">
            <img
              className="h-48 w-full object-cover md:h-full md:w-72 justify-end"
              src={image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
