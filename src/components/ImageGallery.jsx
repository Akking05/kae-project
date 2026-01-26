const ImageGallery = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', title: 'R&D Lab' },
    { id: 2, url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', title: 'Production' },
    { id: 3, url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', title: 'Testing' }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map(img => (
          <div key={img.id} className="group relative h-64 overflow-hidden bg-kae-gray">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-kae-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase">{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;