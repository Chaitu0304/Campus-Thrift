import { ArrowRight, BookOpen, Laptop, Package, ShoppingBag, ShieldCheck, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary-500 opacity-20 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide mb-6 inline-block border border-primary-100">
                Exclusive to your campus
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-tight">
                Buy Smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  Sell Faster.
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto mb-10">
                The premier marketplace for college students. Find textbooks, electronics, and hostel essentials from your seniors at affordable prices.
              </p>
              <div className="flex justify-center gap-4 flex-col sm:flex-row">
                <Link to="/marketplace" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-500/30 transition-all hover:-translate-y-1">
                  Start Shopping
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/register" className="inline-flex justify-center items-center px-8 py-4 border border-border text-lg font-medium rounded-xl text-foreground bg-white hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-sm">
                  Sell an Item
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Explore Categories</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need for a successful semester.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Books & Notes', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
              { name: 'Electronics', icon: Laptop, color: 'bg-purple-100 text-purple-600' },
              { name: 'Hostel Needs', icon: Package, color: 'bg-green-100 text-green-600' },
              { name: 'Accessories', icon: ShoppingBag, color: 'bg-orange-100 text-orange-600' },
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-md"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${cat.color}`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Trusted Community</h3>
              <p className="text-muted-foreground">Only verified students from your campus can buy and sell. Safe and secure.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">Meet on campus and exchange items instantly. No shipping delays or fees.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Eco-Friendly</h3>
              <p className="text-muted-foreground">Promote sustainability by reusing academic resources within your college.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
