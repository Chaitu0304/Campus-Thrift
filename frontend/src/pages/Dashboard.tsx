import { useState, useEffect } from 'react';
import { Package, Heart, Settings, LogOut, Plus, Loader2 } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: string;
  images: string[];
  sellerId: {
    _id: string;
    name: string;
    campus: string;
  } | string;
}

export default function Dashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listings');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // New product form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Books',
    condition: 'Good',
    price: '',
    department: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchMyProducts = async () => {
      try {
        setIsLoading(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await fetch(`${API_URL}/api/products?sellerId=${user?._id}`);
        const data = await response.json();
        const myProducts = data.filter((p: Product) => {
          if (p.sellerId && typeof p.sellerId === 'object' && '_id' in p.sellerId) {
            return p.sellerId._id === user?._id;
          }
          return p.sellerId === user?._id;
        });
        setProducts(myProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyProducts();
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          campus: user.campus
        }),
      });

      if (response.ok) {
        setShowAddForm(false);
        setFormData({ title: '', description: '', category: 'Books', condition: 'Good', price: '', department: '' });
        setShowAddForm(false);
        setFormData({ title: '', description: '', category: 'Books', condition: 'Good', price: '', department: '' });
        // Since fetchMyProducts is in useEffect now, we can either trigger a re-fetch or just reload
        window.location.reload();
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-border mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">{user.name}</h2>
                <p className="text-sm text-muted-foreground line-clamp-1">{user.campus}</p>
              </div>
            </div>
            <button 
              onClick={() => { setShowAddForm(true); setActiveTab('listings'); }}
              className="w-full flex items-center justify-center gap-2 bg-primary-50 text-primary-600 py-2 rounded-lg font-medium hover:bg-primary-100 transition-colors"
            >
              <Plus className="w-4 h-4" /> List New Item
            </button>
          </div>

          <nav className="space-y-1">
            <button 
              onClick={() => { setActiveTab('listings'); setShowAddForm(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'listings' && !showAddForm ? 'bg-primary-50 text-primary-700 border border-primary-100' : 'text-muted-foreground hover:bg-gray-50 hover:text-foreground'}`}
            >
              <Package className="w-5 h-5" /> My Listings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-gray-50 hover:text-foreground rounded-xl font-medium transition-colors">
              <Heart className="w-5 h-5" /> Saved Items
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-gray-50 hover:text-foreground rounded-xl font-medium transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </button>
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors mt-4">
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            
            {showAddForm ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">List a New Item</h2>
                  <button onClick={() => setShowAddForm(false)} className="text-muted-foreground hover:text-foreground text-sm font-medium">Cancel</button>
                </div>
                
                <form onSubmit={handleAddSubmit} className="space-y-4 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                    <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg" placeholder="Calculus 8th Edition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Description</label>
                    <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg h-24" placeholder="Describe the item condition..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Price ($)</label>
                      <input required type="number" min="0" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg" placeholder="25.00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                      <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg bg-white">
                        <option>Books</option>
                        <option>Electronics</option>
                        <option>Hostel</option>
                        <option>Stationery</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Condition</label>
                      <select required value={formData.condition} onChange={e => setFormData({...formData, condition: e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg bg-white">
                        <option>New</option>
                        <option>Like New</option>
                        <option>Good</option>
                        <option>Fair</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Department/Course (Optional)</label>
                      <input type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className="w-full px-4 py-2 border border-border rounded-lg" placeholder="CS101" />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full md:w-auto px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium">List Item</button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-6">Active Listings</h2>
                
                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary-500" />
                  </div>
                ) : products.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                      <Package className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">No active listings</h3>
                    <p className="text-muted-foreground mt-2 mb-6">You haven't listed any items for sale yet.</p>
                    <button onClick={() => setShowAddForm(true)} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-all">
                      Create your first listing
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {products.map((product) => (
                      <div key={product._id} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-xl">
                        <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200'} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
                            <span className="font-bold text-primary-600">${product.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{product.description}</p>
                          <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md">{product.category}</span>
                            <span className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-md">{product.condition}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
