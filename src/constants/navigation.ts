export const navigationItems = ['Shop', 'About', 'Blog', 'Contact'] as const;

export interface NavigationItem {
  label: string;
  href: string;
}

export const footerNavigation = {
  shop: [
    { label: 'New Arrivals', href: '/store/new' },
    { label: 'Best Sellers', href: '/store/bestsellers' },
    { label: 'Deals', href: '/store/deals' }
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