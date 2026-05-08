import { Link } from 'react-router-dom';
import { Package, Heart, ShoppingBag, Settings, LogOut, Plus } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-border mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold">
                JD
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">John Doe</h2>
                <p className="text-sm text-muted-foreground">Stanford University</p>
              </div>
            </div>
            <Link to="/register" className="w-full flex items-center justify-center gap-2 bg-primary-50 text-primary-600 py-2 rounded-lg font-medium hover:bg-primary-100 transition-colors">
              <Plus className="w-4 h-4" /> List New Item
            </Link>
          </div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-700 rounded-xl font-medium border border-primary-100">
              <Package className="w-5 h-5" /> My Listings
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-gray-50 hover:text-foreground rounded-xl font-medium transition-colors">
              <Heart className="w-5 h-5" /> Saved Items
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-gray-50 hover:text-foreground rounded-xl font-medium transition-colors">
              <ShoppingBag className="w-5 h-5" /> Purchases
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-gray-50 hover:text-foreground rounded-xl font-medium transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors mt-4">
              <LogOut className="w-5 h-5" /> Sign Out
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Active Listings</h2>
            
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-foreground">No active listings</h3>
              <p className="text-muted-foreground mt-2 mb-6">You haven't listed any items for sale yet.</p>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-all">
                Create your first listing
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
