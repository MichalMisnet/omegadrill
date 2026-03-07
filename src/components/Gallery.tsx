import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryItem {
    title: string;
    image: string;
    date: string;
}

const Gallery = () => {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        // In a real build, we would use Vite's import.meta.glob to load markdown files.
        // For this demonstration, we'll provide a few default items if the content folder is empty.
        const defaultItems: GalleryItem[] = [
            {
                title: "Budowa biurowca - Warszawa",
                image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
                date: "2024-01-15"
            },
            {
                title: "Wzmocnienie fundamentów - Kraków",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
                date: "2024-02-10"
            },
            {
                title: "Mikropale TITAN - Gdańsk",
                image: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=800",
                date: "2024-03-05"
            }
        ];
        setItems(defaultItems);
    }, []);

    return (
        <div id="gallery-component">
            <div className="gallery-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem'
            }}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        layoutId={`image-${index}`}
                        onClick={() => setSelectedImage(item.image)}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '4px',
                            aspectRatio: '4/3',
                            background: '#222'
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.3s' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.5rem',
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                            color: 'white'
                        }}>
                            <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                            padding: '2rem'
                        }}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
