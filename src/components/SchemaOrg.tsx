import { formatNaira, plans } from '../content'

export function SchemaOrg() {
  const priced = plans.filter((p) => p.price != null) as { name: string; price: number }[]
  const minP = Math.min(...priced.map((p) => p.price))
  const maxP = Math.max(...priced.map((p) => p.price))
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DevCraft Studio',
    description:
      'Professional website development for Nigerian businesses, startups, schools, churches, and SMEs — transparent pricing in Naira, fast delivery, and ongoing support options.',
    url: 'https://devcraftstudio.com',
    email: 'wisdomiwunwa2@gmail.com',
    telephone: '+234-704-225-9026',
    priceRange: `₦${formatNaira(minP)}–₦${formatNaira(maxP)}`,
    serviceType: ['Web Development', 'Web Design', 'SEO Optimisation', 'E-commerce Development', 'Google Business Profile Setup'],
    offers: plans
      .filter((p) => p.price != null)
      .map((p) => ({ '@type': 'Offer', name: p.name, price: String(p.price), priceCurrency: 'NGN' })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }} />
}
