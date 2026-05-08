import { useState, useEffect } from 'react';
import { Search, Filter, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  title: string;
  price: number;
  images: string[];
  condition: string;
  category: string;
}

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = new URL('http://localhost:5000/api/products');
        if (searchTerm) url.searchParams.append('search', searchTerm);
        
        const response = await fetch(url.toString());
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Marketplace</h1>
          <p className="text-muted-foreground">Find the best deals on campus.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-muted-foreground w-5 h-5" />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`} className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'}
                  alt={product.title}
                  className="h-48 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-1">{product.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{product.category} • {product.condition}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-bold text-primary-600">${product.price}</span>
                  <span className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md">View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
