const ProductCard = ({ title, category, image }) => {
  return (
    <div className="group relative bg-kae-gray/30 border border-white/5 p-4 overflow-hidden transition-all duration-500 hover:border-kae-green/50">
      {/* Эффект свечения при наведении */}
      <div className="absolute -inset-1 bg-kae-green/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative">
        {/* Блок с изображением */}
        <div className="h-56 mb-6 overflow-hidden bg-black/50 flex items-center justify-center">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          ) : (
            <span className="text-kae-green/20 text-4xl font-black italic">NO IMAGE</span>
          )}
        </div>
        
        <span className="text-[10px] text-kae-green uppercase tracking-[3px] mb-2 block font-bold">
          {category}
        </span>
        
        <h3 className="text-xl font-bold text-white group-hover:text-kae-green transition-colors">
          {title}
        </h3>
        
        <div className="mt-6 flex justify-between items-center border-t border-white/5 pt-4">
          <button className="text-[10px] text-white/50 uppercase tracking-widest hover:text-kae-green transition-all cursor-pointer">
            Толығырақ →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;