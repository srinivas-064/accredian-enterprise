import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo & Contact CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-200">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex flex-col mb-4 select-none group">
              <span className="text-3xl font-extrabold text-blue-600 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                accredian
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-normal mt-0.5">
                credentials that matter
              </span>
            </Link>
            <div className="flex space-x-4 text-gray-600">
              {/* Social Icons (using text placeholders for simplicity, can use SVGs) */}
              <a href="#" className="hover:text-blue-600 transition-colors font-bold">f</a>
              <a href="#" className="hover:text-blue-600 transition-colors font-bold">in</a>
              <a href="#" className="hover:text-blue-600 transition-colors font-bold">t</a>
              <a href="#" className="hover:text-blue-600 transition-colors font-bold">ig</a>
              <a href="#" className="hover:text-blue-600 transition-colors font-bold">yt</a>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg mb-2 transition-colors">
              Enquire Now
            </button>
            <span className="text-sm text-gray-500">Speak with our Advisor</span>
          </div>
        </div>

        {/* Middle Row: Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-gray-200">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Accredian</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">Why Accredian</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Contact Us</h4>
            <p className="text-gray-600 mb-3 font-medium">
              Email us: <a href="mailto:enterprise@accredian.com" className="text-blue-600 hover:underline">enterprise@accredian.com</a>
            </p>
            <p className="text-gray-600 font-medium">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-6 text-center">
          <p className="text-gray-500 font-medium">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
