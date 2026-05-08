export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-400 flex items-center justify-center text-white font-bold text-xl">
                CT
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Campus Thrift</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Buy Smarter. Sell Faster. The premier marketplace for students.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Marketplace</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Books</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Electronics</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Hostel Essentials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex items-center justify-between">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Campus Thrift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
