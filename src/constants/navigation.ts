 export const navigationItems = ['Shop', 'About', 'Blog', 'Contact'] as const;

export interface NavigationItem {
  label: string;
  href: string;
}

export const footerNavigation = {
  shop: [
    { label: 'New Arrivals', href: '/components/ui/shop' },
    { label: 'Best Sellers', href: '/components/ui/shop' },
    { label: 'Deals', href: '/components/ui/shop' }
  ],
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Our Impact', href: '/impact' },
    { label: 'Blog', href: '/blog' }
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Contact', href: '/contact' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Returns', href: '/returns' }
  ]
} as const; 