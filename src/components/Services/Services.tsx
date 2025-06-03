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
}

const serviceCards: Service[] = [
  {
    title: 'Web Application Solutions',
    price: 'Custom Quote',
    description:
      "We build bespoke web applications tailored to your unique goals—whether it's a dynamic marketing site, a powerful platform, or a cross-platform solution. Let’s align on your vision and deliver a custom quote built around real impact.",
    features: [
      { text: 'Modern, custom design', isAddOn: false },
      { text: 'Responsive & accessible', isAddOn: false },
      { text: 'Optimized performance', isAddOn: false },
      { text: 'Animations & interactions', isAddOn: false },
      { text: 'Scalable backend solutions or bring your own backend', isAddOn: false },
      { text: 'Multi-platform support | Custom quote', isAddOn: true },
    ],
  },
  {
    title: 'Website',
    price: '₹ 5999.00 <sup style="font-size: 12px; font-weight: 400; color: hsl(var(--clr-Persian_Rose))">onwards*</sup>',
    description: "There are no limits to your website vision ― Let's make it happen!.",
    features: [
      { text: 'Modern, custom design', isAddOn: false },
      { text: 'Responsive & accessible', isAddOn: false },
      { text: 'Animations & interactions', isAddOn: false },
      { text: 'SEO & page speed optimization', isAddOn: false },
      { text: 'Engaging user experience', isAddOn: false },
      { text: 'CMS (self-customizability) implementation | Custom quote', isAddOn: true },
      { text: 'Multilingual support | Custom quote', isAddOn: true },
      { text: 'Analytics | Custom quote', isAddOn: true },
    ],
  },
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
