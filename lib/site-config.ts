export const siteConfig = {
  name: 'Utkarsh Hospital & College',
  shortName: 'Utkarsh',
  tagline: 'Touching Lives Forever',
  description:
    'Utkarsh Hospital & College – A trusted multi-speciality hospital and healthcare education institution in Naubasta, Kanpur. Established 2007. BScN, GNM, Paramedical courses & 100-bed hospital.',
  // TODO: replace with the live production domain once available.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.utkarshhospital.in',
  phone: '9532700007',
  phoneIntl: '+919532700007',
  whatsappNumber: '919532700007',
  email: 'info@utkarshhospital.in',
  address: {
    locality: 'Naubasta',
    city: 'Kanpur',
    region: 'Uttar Pradesh',
    country: 'IN',
  },
  foundedYear: 2007,
  ogImage: '/images/group-pic.jpg',
}
