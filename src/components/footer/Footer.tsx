import Link from "next/link";
import { footerNavigation } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerNavigation.shop.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-3">
              {footerNavigation.about.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-emerald-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} EcoCrate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 