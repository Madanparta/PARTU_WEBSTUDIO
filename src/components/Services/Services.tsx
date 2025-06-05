import ServiceCard from './ServiceCard ';
import './Services.scss';

type Feature = {
  text: string;
  isAddOn: boolean;
};

interface Service {
  title: string;
  price: string;
  description: string;
  features: Feature[];
  highlights?: string[];
}

const serviceCards: Service[] = [
  {
    title: 'Web Application Solutions',
    price: 'Custom Quote',
    description:
      "We craft custom web apps that match your goals be it a marketing site, platform, or cross-platform solution. Let’s align on your vision and build a quote that delivers real impact.",
    features: [
      { text: 'Modern, custom design', isAddOn: false },
      { text: 'Responsive & accessible', isAddOn: false },
      { text: 'Optimized performance', isAddOn: false },
      { text: 'Animations & interactions', isAddOn: false },
      { text: 'Scalable backend solutions or bring your own backend', isAddOn: false },
      { text: 'Multi-platform support (PWA, Desktop, Mobile) | Custom quote', isAddOn: true },
      { text: 'Priority support & dedicated project manager | Custom quote', isAddOn: true },
    ],
    highlights: ["Ideal for startups & enterprises · 1-month free bug fixes."],
  },
  {
    title: 'Professional Website',
    price: '₹ 7,999 <sup style="font-size: 12px; font-weight: 500; color: hsl(var(--clr-Persian_Rose))">onwards*</sup>',
    description: "Get a high-quality, custom-designed website with modern features—perfect for businesses and professionals.",
    features: [
      { text: '5+ pages with modern design', isAddOn: false },
      { text: 'Fully responsive & mobile-friendly', isAddOn: false },
      { text: 'Basic SEO optimization', isAddOn: false },
      { text: 'Fast-loading performance', isAddOn: false },
      { text: '1-month free maintenance', isAddOn: false },
      { text: 'CMS (self-editable) integration | +₹2,500', isAddOn: true },
      { text: 'Multilingual support (Hindi/Regional) | +₹3,000', isAddOn: true },
      { text: 'Premium hosting setup | +₹1,500/year', isAddOn: true },
    ],
    highlights: ["7-day money-back guarantee · Free domain & SSL* for 1st year."],
  },
  {
    title: 'Website Maintenance & Support',
    price: '₹ 1,599 <sup style="font-size: 12px; font-weight: 500; color: hsl(var(--clr-Persian_Rose))">/month*</sup>',
    description: "Keep your website secure, updated, and running smoothly with our hassle-free maintenance plans.",
    features: [
      { text: 'Security updates & backups', isAddOn: false },
      { text: 'Performance optimization', isAddOn: false },
      { text: 'Basic content updates (up to 5 pages/month)', isAddOn: false },
      { text: '24/7 emergency support', isAddOn: false },
      { text: 'Quarterly plan (₹4,317 - save 10%)', isAddOn: true },
      { text: 'Half-yearly plan (₹8,154 - save 15%)', isAddOn: true },
      { text: 'Yearly plan (₹15,350 - save 20%)', isAddOn: true },
      { text: 'Premium support (2-hour response) | +₹999/month', isAddOn: true },
    ],
    highlights: ["Uptime monitoring included · GST-compliant invoices."],
  }
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="services_header_container">
        <span id="services" className="text_button">Services</span>
        <h2 className="fs-h2">Launching visions, building websites</h2>
        <p className="p_paragraph">
          Secure your seat, fasten your seatbelt, and join us on an interstellar journey to <b>turn your web vision into a next level reality</b>.
        </p>
      </div>

      <div className="services_card_container">
        {serviceCards.map((card, idx) => (
          <ServiceCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Services;
