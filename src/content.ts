export type ServiceTier = {
  icon: string
  label: string
  color: string
  bg: string
  bdr: string
  headline: string
  desc: string
  items: string[]
  href: string
}

export const tiers: ServiceTier[] = [
  {
    icon: '🏪',
    label: 'Businesses & SMEs',
    color: 'var(--blue)',
    bg: 'var(--blue-l)',
    bdr: 'var(--blue-m)',
    headline: 'Look credible and win more customers online',
    desc: 'Professional brochure sites, lead capture, and Google visibility — built for Nigerian businesses that want results without agency prices.',
    items: ['3–5 page sites & upgrades', 'Contact forms & WhatsApp', 'Google Business & SEO setup', 'Mobile-first, fast loading'],
    href: '#pricing',
  },
  {
    icon: '🚀',
    label: 'Startups',
    color: 'var(--orange)',
    bg: 'var(--orange-l)',
    bdr: 'var(--orange-m)',
    headline: 'Launch fast with a site that sells your idea',
    desc: 'Landing pages and product sites that help you test the market, look investor-ready, and onboard early users while you iterate.',
    items: ['High-converting layouts', 'Blog & analytics (Business+)', 'Scales to e‑commerce (Premium)', 'Clear upgrade path'],
    href: '#pricing',
  },
  {
    icon: '🎓',
    label: 'Schools',
    color: 'var(--green)',
    bg: 'var(--green-l)',
    bdr: 'var(--green-m)',
    headline: 'Communicate clearly with parents and students',
    desc: 'Modern school sites for admissions, announcements, and enquiries — easy to navigate on phones and easy for staff to maintain.',
    items: ['Admissions & enquiry flows', 'News and updates sections', 'Trusted, professional design', 'Hosting & domain assistance'],
    href: '#pricing',
  },
  {
    icon: '⛪',
    label: 'Churches & organisations',
    color: 'var(--purple)',
    bg: 'var(--purple-l)',
    bdr: 'var(--purple-m)',
    headline: 'A welcoming home online for your community',
    desc: 'Warm, modern sites for services, events, giving info, and contact — so visitors find what they need in seconds.',
    items: ['Events & service information', 'Contact & social integration', 'Optional blog for updates', 'Non-profit friendly pricing on request'],
    href: '#pricing',
  },
]

export type ProcessStep = {
  n: string
  icon: string
  title: string
  desc: string
}

export const steps: ProcessStep[] = [
  {
    n: '01',
    icon: '📋',
    title: 'Free Discovery Call',
    desc: 'We meet to understand your goals, timeline, and budget. No commitment required.',
  },
  {
    n: '02',
    icon: '📄',
    title: 'Proposal & Fixed Quote',
    desc: 'You receive a clear, itemised scope with a fixed price. What you see is what you pay.',
  },
  {
    n: '03',
    icon: '🎨',
    title: 'Design & Development',
    desc: 'We build in stages with regular check-ins, demos, and your feedback at every step.',
  },
  {
    n: '04',
    icon: '🚀',
    title: 'Launch & Handover',
    desc: 'We go live, hand over access, and include 7–30 days of support depending on your package — plus optional ongoing care.',
  },
]

export type Plan = {
  tier: string
  name: string
  price: number | null
  /** Regular price before promo (shown struck through when set). */
  compareAtPrice?: number | null
  /** Short badge on the card, e.g. limited promo. */
  promoBadge?: string
  ideal: string
  color: string
  cbg: string
  popular: boolean
  features: string[]
}

/** All public prices are in Nigerian Naira (NGN). */
export const currencyCode = 'NGN' as const

export function formatNaira(amount: number) {
  return amount.toLocaleString('en-NG')
}

export const plans: Plan[] = [
  {
    tier: 'Limited promo',
    name: 'Professional',
    price: 200_000,
    compareAtPrice: 250_000,
    promoBadge: 'LIMITED PROMO',
    ideal: 'Businesses, schools, churches & SMEs — go live fast',
    color: 'var(--blue)',
    cbg: 'var(--blue-l)',
    popular: true,
    features: [
      '3–5 page professional website',
      'Mobile responsive design',
      'Contact form for enquiries',
      'Fast loading pages',
      'Modern business design',
      'Free domain & hosting setup',
      'Free WhatsApp chat integration',
      'Free Google SEO setup',
      'Free Google Business listing',
      'Free social media integration',
      '7 days free support',
    ],
  },
  {
    tier: 'Growing brands',
    name: 'Business',
    price: 450_000,
    ideal: 'Organisations that need more pages & content',
    color: 'var(--green)',
    cbg: 'var(--green-l)',
    popular: false,
    features: [
      'Everything in Professional where applicable',
      'Up to 10 pages',
      'Custom UI design',
      'Blog & analytics',
      'Advanced SEO',
      '14 days support',
    ],
  },
  {
    tier: 'Shops & platforms',
    name: 'Premium',
    price: null,
    ideal: 'E‑commerce and admin-ready builds',
    color: 'var(--orange)',
    cbg: 'var(--orange-l)',
    popular: false,
    features: [
      'Unlimited pages',
      'E‑commerce features',
      'Admin dashboard',
      'Advanced SEO Pro',
      '30 days support',
      'Priority structure for larger sites',
    ],
  },
  {
    tier: 'Bespoke',
    name: 'Custom',
    price: null,
    ideal: 'Complex apps, integrations, or retainers',
    color: 'var(--purple)',
    cbg: 'var(--purple-l)',
    popular: false,
    features: [
      'Scoped to your exact needs',
      'Custom workflows & integrations',
      'SLA-style delivery on request',
      'Security & performance review',
      'Ongoing retainer available',
      'Dedicated communication channel',
    ],
  },
]

export type Project = {
  name: string
  type: string
  tag: string
  color: string
  cbg: string
  desc: string
}

export const projects: Project[] = [
  {
    name: 'Bloom Wellness',
    type: 'Small Business',
    tag: 'E-commerce + Booking',
    color: 'var(--green)',
    cbg: 'var(--green-l)',
    desc: 'Wellness studio with class booking, memberships, and an online shop.',
  },
  {
    name: 'FounderOS',
    type: 'Startup',
    tag: 'SaaS MVP',
    color: 'var(--blue)',
    cbg: 'var(--blue-l)',
    desc: 'OKR and task management platform. Grew to 400 users within 6 weeks of launch.',
  },
  {
    name: 'Marcus Lee',
    type: 'Individual',
    tag: 'Portfolio',
    color: 'var(--purple)',
    cbg: 'var(--purple-l)',
    desc: 'Cinematographer portfolio with full-screen video hero and project gallery.',
  },
  {
    name: 'NorthWave',
    type: 'Enterprise',
    tag: 'Internal Dashboard',
    color: 'var(--orange)',
    cbg: 'var(--orange-l)',
    desc: 'Real-time fleet tracking dashboard with analytics and driver management portal.',
  },
  {
    name: 'Crunch & Co.',
    type: 'Small Business',
    tag: 'Restaurant + Orders',
    color: 'var(--green)',
    cbg: 'var(--green-l)',
    desc: 'Restaurant site with online ordering, table reservations, and a loyalty programme.',
  },
  {
    name: 'DataLens AI',
    type: 'Startup',
    tag: 'Landing + App',
    color: 'var(--blue)',
    cbg: 'var(--blue-l)',
    desc: 'AI analytics startup with live product demo, pricing table, and onboarding flow.',
  },
]

export type Testimonial = {
  name: string
  role: string
  av: string
  text: string
  stars: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Founder, Bloom Wellness',
    av: 'SM',
    text: 'DevCraft delivered our full site in under three weeks. The design was stunning and bookings doubled in the first month.',
    stars: 5,
  },
  {
    name: 'James T.',
    role: 'CTO, FounderOS',
    av: 'JT',
    text: 'The best decision we made for our MVP. They think like founders — fast, pragmatic, and genuinely high quality.',
    stars: 5,
  },
  {
    name: 'Linda K.',
    role: 'Freelance Photographer',
    av: 'LK',
    text: 'My portfolio went from embarrassing to award-winning. Genuinely shocked at what they built for the price.',
    stars: 5,
  },
  {
    name: 'David O.',
    role: 'MD, NorthWave Logistics',
    av: 'DO',
    text: 'Complex requirements, tight deadline. Perfect delivery. Our team actually enjoys using the dashboard every day.',
    stars: 5,
  },
]

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'How long does a typical project take?',
    a: 'The promotional Professional package is built to get you online quickly — often within 5–7 days for the first live version, with a typical full handover around two weeks depending on content. Business and Premium timelines are confirmed in your proposal.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We usually work on a deposit to start and balance on delivery. Larger packages can be split into milestones. All quotes are in Nigerian Naira (₦).',
  },
  {
    q: 'Do I own the code and design files?',
    a: 'Completely. Once the final invoice is settled, you own everything — source code, design files, and all assets. No ongoing licensing fees.',
  },
  {
    q: 'What happens after launch?',
    a: 'Professional includes 7 days of support; Business and Premium include 14 and 30 days respectively. After that, we can agree on light maintenance or updates as you need them.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: "Absolutely — redesigns are a speciality. We'll audit your current site and build a faster, clearer version aligned with your goals.",
  },
  {
    q: 'Is the ₦100,000 promo always available?',
    a: 'Promo pricing is limited while slots are open. When the promo ends, the Professional package returns to the regular ₦250,000 rate — we always confirm the current price before you commit.',
  },
]
