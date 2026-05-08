import { useParams, Link } from 'react-router-dom';
import { MessageSquare, Heart, Share2, AlertCircle, Clock, MapPin, User as UserIcon } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();

  // Mock product data
  const product = {
    id,
    title: 'Calculus Early Transcendentals 8th Edition',
    price: 45,
    description: 'Good condition, no highlights. Used for MATH 101 last semester. Can meet at library.',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    ],
    condition: 'Good',
    category: 'Books',
    department: 'Mathematics',
    postedAt: '2 days ago',
    seller: {
      name: 'Alex Johnson',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
      campus: 'Stanford University'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-xl overflow-hidden border border-border">
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm text-primary-600 font-medium mb-2 block">{product.category}</span>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.title}</h1>
                <p className="text-3xl font-extrabold text-primary-600 mb-4">${product.price}</p>
              </div>
              <button className="p-3 bg-gray-50 text-gray-500 rounded-full hover:bg-gray-100 hover:text-red-500 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                Condition: {product.condition}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                {product.department}
              </span>
            </div>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-auto border-t border-border pt-6">
              <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <img src={product.seller.avatar} alt={product.seller.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <p className="font-semibold text-foreground">{product.seller.name}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center text-yellow-500">⭐ {product.seller.rating}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {product.seller.campus}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-xl font-medium shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Chat with Seller
                </button>
                <button className="px-6 py-3 border border-border bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium flex items-center gap-2 shadow-sm">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
