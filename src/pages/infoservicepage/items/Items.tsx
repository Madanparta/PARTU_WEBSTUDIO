import { Link, useNavigate, useParams } from 'react-router-dom';
import './items.scss';
import arrowbottom from '../../../assets/svgs/right-arrow.svg';
import Accordian from '../../../components/accordian/Accordian';
import Primarybutton from '../../../components/primarybutton/Primarybutton';
import BG from '../../../assets/svgs/BG.svg';
import { useRef } from 'react';
import { useDisableCopyPaste } from '../../../hooks/useDisableCopyPaste';
import useScrollToTop from '../../../hooks/useScrollToTop';

const Items = () => {

    useDisableCopyPaste(true);
    useScrollToTop();
    const {encoded} = useParams();
    const navigation = useNavigate();
    
    const decoded = atob(encoded as string);
    const itemsSelectedRef = useRef<HTMLDivElement>(null);

    const accordionItems1 = [
        {
            id: 1,
            title: "LOGO DESIGN",
            content: "Capture the essence of your brand in a single iconic emblem. Our team of talented designers meticulously craft logos that resonate with your audience and encapsulate your brand's identity. From timeless simplicity to intricate symbolism, we breathe life into your vision, ensuring your logo stands as a beacon of recognition in a sea of competitors."
        },
        {
            id: 2,
            title: "BRAND STRATEGRY",
            content: "Crafting a compelling narrative and defining your brand's direction is more than just a process; it's an art form. At our core, we are strategists driven by meticulous market analysis and creative ideation. We delve deep into the intricacies of your industry, uncovering unique insights that become the cornerstone of your brand's identity. \n \n With precision and insight, we guide you through a strategic roadmap designed for success in today's dynamic marketplace. Our approach is tailored, elevating your brand above the noise to make a lasting impact. We don't just navigate the currents; we shape them, ensuring your brand stands as a beacon of distinction in an ever-evolving landscape.Crafting impactful brand messaging is our expertise. Through careful analysis and creative exploration, we uncover the essence of your brand's story. We distill complex ideas into concise, memorable messages that resonate with your audience. With a keen understanding of your target market, we craft narratives that cut through the clutter, leaving a lasting impression. Trust us to articulate your brand's voice with clarity and authenticity, ensuring it resonates with your audience on a deeper level."
        },
        {
            id: 3,
            title: "BRAND MESSAGE",
            content: "Crafting impactful brand messaging is our expertise. Through careful analysis and creative exploration, we uncover the essence of your brand's story. We distill complex ideas into concise, memorable messages that resonate with your audience. With a keen understanding of your target market, we craft narratives that cut through the clutter, leaving a lasting impression. Trust us to articulate your brand's voice with clarity and authenticity, ensuring it resonates with your audience on a deeper level."
        },
        {
            id: 4,
            title: "VISUAL IDENTITY",
            content: "In our comprehensive branding service, we extend beyond crafting visual identities to offer a diverse range of design solutions aimed at enhancing your brand's presence. From captivating environmental design that creates memorable brand experiences to collateral design for print materials, we cover various touchpoints to ensure a cohesive brand image. \n \n With meticulous attention to detail and a deep understanding of your brand's essence, we shape visual identities that resonate with your audience and leave a lasting impact. Whether it's digital graphics for online platforms or immersive environmental experiences, trust us to translate your brand's vision into a unified visual language that sets you apart in today's competitive landscape."
        },
        {
            id: 5,
            title: "PACKAGING",
            content: "In our comprehensive branding service, we understand the pivotal role that packaging design plays in shaping the perception of your brand. Beyond its functional purpose, packaging serves as a tangible representation of your brand's identity and values. With meticulous attention to detail and a deep understanding of consumer behavior, we specialize in crafting packaging solutions that not only protect your product but also leave a lasting impression on your audience. \n \n From conceptualization to execution, our team merges creativity and strategy to develop packaging designs that stand out on the shelf and resonate with your target market. With a focus on storytelling and visual impact, we ensure that every box, bag, or label communicates your brand's unique narrative, fostering a stronger connection with consumers and enhancing brand loyalty. Trust us to transform your packaging into a powerful brand asset that sets you apart from the competition."
        },
    ];

    const accordionItems2 = [
        {
            id: 1,
            title: "CONTENT CREATION",
            content: "We understand the crucial role of content in shaping your brand's online presence. We specialize in crafting diverse content types like blog articles, social media posts, videos, infographics, etc. Our team merges creativity with strategic insights to develop engaging content that resonates with your audience, fostering brand loyalty and driving long-term success. Trust us to elevate your content strategy and transform your brand's digital presence into a captivating storytelling platform."
        },
        {
            id: 2,
            title: "SOCIAL MEDIA MARKETING",
            content: "In our integrated approach to branding, we understand the influential power of social media marketing in expanding your brand's reach and engagement. From strategic planning to dynamic content creation and meticulous community management, we specialize in crafting bespoke social media campaigns across platforms such as Facebook, Instagram, Twitter, and LinkedIn. With a deep insight into your target audience and adept navigation of industry trends, we deliver captivating content that ignites conversations and cultivates meaningful connections. Entrust us to elevate your social media presence, establishing a compelling brand identity that resonates profoundly with your audience and fosters enduring relationships."
        },
        {
            id: 3,
            title: "SEARCH ENGINE VISIBILITY",
            content: "We adopt a dynamic approach to brand enhancement, placing significant emphasis on optimizing search engine visibility through both SEO and SEM strategies. From strategic keyword targeting to finely-tuned ad campaigns, we specialize in catapulting your brand to the forefront of search engine results pages. With a meticulous focus on industry trends and user behavior, we craft tailored strategies to ensure your brand not only captures attention but also drives meaningful engagement. Trust us to elevate your search engine presence, unlocking new opportunities for organic growth and amplifying your brand's reach to targeted audiences."
        },
        {
            id: 4,
            title: "PERFORMANCE MARKETING",
            content: "Driving brand success through targeted strategies, performance marketing is our forte. Utilizing data-driven insights and precision tactics, we specialize in crafting campaigns that deliver measurable results. From optimizing conversion rates to maximizing ROI, our approach focuses on driving tangible outcomes that align with your business objectives. With a keen eye on analytics and continuous optimization, we ensure your brand achieves peak performance in the competitive digital landscape. Trust us to elevate your marketing efforts with performance-driven strategies that propel your brand towards unparalleled success."
        },
    ];

    const accordionItems3 = [
        {
            id: 1,
            title: "USER RESEARCH",
            content: "User research is fundamental to UI/UX design. Through qualitative and quantitative methods, we deeply understand your target audience— their behaviors, preferences, and pain points. From user personas to journey mapping, we analyze the user experience to ensure intuitive interactions that engage your audience. Trust us to leverage user research for designs that resonate, enhancing your brand's digital presence."
        },
        {
            id: 2,
            title: "WIREFRAMING & PROTOTYPING",
            content: "Through iterative processes, we transform user research insights into tangible solutions. From rough sketches to interactive prototypes, we refine designs to ensure seamless user experiences. Trust us to bring your vision to life with wireframes and prototypes that resonate, enhancing your brand's digital presence."
        },
        {
            id: 3,
            title: "UX AUDITS",
            content: "UX audits are integral to our service, providing valuable insights into your digital user experience. Through comprehensive analysis, we evaluate usability, accessibility, and overall user satisfaction. Our audits identify strengths and weaknesses, informing strategic improvements to optimize the user journey. Trust us to conduct UX audits that enhance your digital presence, fostering meaningful interactions and driving long-term engagement."
        },
        {
            id: 4,
            title: "INTERFACE DESIGN",
            content: "We infuse creativity with functionality to curate visually stunning and intuitive interfaces. From wireframes to prototypes, each element is meticulously crafted to ensure smooth interactions. Count on us to deliver interfaces that not only captivate your audience but also elevate their experience, fostering engagement and connection with your brand."
        },
    ];

    const accordionItems4 = [
        {
            id: 1,
            title: "CUSTOM APP DEVELOPMENT",
            content: "Specializing in custom app development for both mobile and web platforms, we harness the latest technologies to bring your vision to life. Our team combines expertise in frontend and backend development with a deep understanding of user experience design to create seamless, intuitive, and high-performing applications. Whether you're targeting iOS or Android for mobile or seeking a responsive web solution, we leverage modern frameworks and tools such as React Native, Flutter, Angular, or Laravel to ensure that your app not only meets but exceeds industry standards. \n \n With a focus on scalability, security, and user engagement, we deliver bespoke solutions tailored to your specific requirements, ensuring that your digital presence stands out in today's competitive landscape."
        },
        {
            id: 2,
            title: "WEBSITE DEVELOPMENT",
            content: "We offer a comprehensive range of options tailored to your specific needs and vision. Whether you require a static website for simple informational purposes or a dynamic website with interactive features and functionalities, we have you covered. We leverage readily available scalable frameworks and plugins to streamline development and ensure efficient delivery of your project. \n \n Alternatively, if your vision demands a fully customized solution, our expert team is equipped to build a website from scratch, meticulously tailored to your unique requirements and branding. With our versatile approach, we empower you to achieve your online goals, whether it's establishing a basic online presence or creating a sophisticated digital platform that sets you apart from the competition."
        },
        {
            id: 3,
            title: "UX OPTIMIZATION",
            content: "We specialize in refining existing products, be it mobile or web applications, from both frontend and backend perspectives. By meticulously analyzing user interactions and feedback, we identify areas for improvement to ensure that the product functions seamlessly according to ideal user requirements. Our goal is to enhance functionality and navigation, ultimately driving more conversions and improving overall ease of usage. Through our comprehensive approach, we aim to maximize the performance and effectiveness of your digital assets, delivering enhanced value to your business and users alike."
        },
        {
            id: 4,
            title: "AI / LLM INTEGRATION",
            content: "Integrating AI and machine learning into new or existing products is pivotal to meeting the demands of today's users. By leveraging advanced algorithms and data analytics, we enhance user experiences by delivering personalized and predictive functionalities. \n \n Whether it's optimizing recommendations, automating processes, or improving decision-making, AI integration empowers products to adapt and evolve in real-time, ensuring they remain relevant and valuable in an ever-changing landscape. Through this integration, we strive to not only meet but exceed user expectations, delivering products that are intuitive, efficient, and tailored to individual needs."
        },
    ];

    const scrollToServices = () => {
        const el = itemsSelectedRef.current;
        if(el){
            setTimeout(() => {
                el.scrollIntoView({
                    behavior:'smooth',
                    block:"start"
                })
            }, 300);
        }
    }

    const handleClickPrimarybutton = () => {
        navigation("/contact");
    }
  return (
    <div className='items-component'>
        <div className="infonav">
            <div className='line'></div>
            <p>
                <span><Link to="/">HOME</Link></span>
                <span>/</span>
                <span><Link to="/service">SERVICE</Link></span>
                <span>/</span>
                <span style={{textTransform:'uppercase'}}><Link to={`/service/${encoded}`}>{decoded}</Link></span>
            </p>
        </div>

        <div className="item-container">
            <div className="itemheading-section">
                {
                    decoded === "Branding & Identity Design" && <h2> <span>Branding</span> <span>& <br /></span> <span>Identity</span> <span>Design</span> </h2>
                }
                {
                    decoded === "Digital Marketing" && <h2> <span></span> <span>Digital <br /></span> <span>Marketing</span> </h2>
                }
                {
                    decoded === "UI/UX Design" && <h2> <span>User Interface(UI) </span> <span>& <br /></span> <span>User Experience(UX) </span> <span>Design</span> </h2>
                }
                {
                    decoded === "Web & Mobile App Development" && <h2> <span>Web & Mobile <br /> App </span> <span>Development</span></h2>
                }

                <div className='itemsubheading-section'>
                    <div className='arrowdown' onClick={scrollToServices}>
                        <span>
                            <img src={arrowbottom} alt="" />
                        </span>
                    </div>
                </div>
            </div>

            <div aria-hidden="true" ref={itemsSelectedRef}>
                {
                    decoded === "Branding & Identity Design" && (

                        <div className="itembody-section">

                            <div className="details-section">
                                <h4><span>Elevate </span> <span>Your <br /></span> <span>Brand's </span> <span>Presence!</span></h4>

                                <p>At the core of our approach is the seamless integration of strategic insights and captivating design. This synergy allows us to not only understand the intricacies of your brand but also to translate that understanding into visually compelling elements. By delving deep into your brand's essence and analyzing market dynamics, we uncover valuable insights that inform every design decision.</p>
                                <p>With this strategic foundation in place, we embark on the creative process, where each design choice is purposefully crafted to reinforce your brand narrative. From logo design to color schemes, typography to imagery, every visual element is carefully curated to resonate with your audience and convey your brand's message effectively. This cohesive approach ensures that your brand remains consistent and memorable across all visual touchpoints, leaving a lasting impression that resonates with your audience long after the initial interaction.</p>
                            </div>

                            <div className="accordian-section">
                                <Accordian items={accordionItems1}/>
                            </div>

                        </div>

                    )
                }

                {
                    decoded === "Digital Marketing" && (

                        <div className="itembody-section">

                            <div className="details-section">
                                <h4><span>Empower </span> <span>Your <br /></span> <span>Brand's </span> <span>Digital Footprint</span></h4>

                                <p>In an ever-evolving digital landscape, we stay ahead of the curve by harnessing the latest trends and insights. Through meticulous analysis and creative innovation, we craft targeted campaigns designed to captivate your audience and drive meaningful engagement. By leveraging the power of data-driven strategies, we propel your brand to the forefront of the digital realm, ensuring that your message resonates effectively in today's dynamic environment.</p>
                                <p>Our approach is rooted in a deep understanding of consumer behavior and market dynamics. We don't just follow trends; we anticipate them, allowing us to create campaigns that speak directly to your audience's interests and preferences. With a focus on authenticity and relevance, we ensure that every interaction with your brand leaves a lasting impression, establishing a strong and enduring connection with your audience.</p>
                            </div>

                            <div className="accordian-section">
                                <Accordian items={accordionItems2}/>
                            </div>

                        </div>

                    )
                }

                {
                    decoded === "UI/UX Design" && (

                        <div className="itembody-section">

                            <div className="details-section">
                                <h4><span>Transform </span> <span>User Experiences <br /></span> <span>into </span> <span>Unforgettable Journeys!</span></h4>

                                <p>In our design philosophy, we seamlessly blend both UI (User Interface) and UX (User Experience) principles to create captivating and engaging interfaces. By combining intuitive UI elements with a deep understanding of user behavior, we ensure that every interaction is both visually appealing and user-friendly.</p>
                                <p>Our UX design focuses on optimizing the entire user journey, from simplifying complex processes to enhancing accessibility. Through thorough research and iterative testing, we refine the user experience to resonate deeply with your audience, fostering long-term engagement and brand loyalty.</p>
                                <p>Together, our integrated UI and UX design approach empower your brand to deliver seamless experiences that delight users and drive meaningful connections. Trust us to elevate your digital presence with interfaces that not only look stunning but also enrich the lives of your audience.</p>
                            </div>

                            <div className="accordian-section">
                                <Accordian items={accordionItems3}/>
                            </div>

                        </div>

                    )
                }

                {
                    decoded === "Web & Mobile App Development" && (

                        <div className="itembody-section">

                            <div className="details-section">
                                <h4><span>Embark </span> <span>on a Digital Journey <br /></span> <span>Tailored to </span> <span>Your Vision!</span></h4>

                                <p>At the heart of our approach to digital solutions lies a deep integration of cutting-edge technology, versatile platforms, and robust frameworks, complemented by intuitive UI/UX design. We leverage the latest advancements in technology to ensure that your product not only meets but exceeds industry standards. From frontend development using modern frameworks like React.js or Vue.js to backend infrastructure built on reliable technologies such as Node.js or Django, we employ a comprehensive tech stack tailored to your project's unique needs.</p>
                                <p>Furthermore, our expertise extends beyond initial development to encompass ongoing backend support and maintenance. We understand the importance of keeping your digital assets running smoothly and securely. That's why we offer dedicated support services to address any technical issues, implement updates, and ensure optimal performance over time. With our proactive approach to maintenance and support, you can rest assured that your digital solutions will continue to thrive long after the initial launch, providing lasting value to your business and users alike.</p>
                            </div>

                            <div className="accordian-section">
                                <Accordian items={accordionItems4}/>
                            </div>

                        </div>

                    )
                }
            </div>


        </div>

        <div className="servicecontact-container">
            <div className="contactinfo-section">
                <h2>
                    <span>Flexible</span> <span>Service Models <br /> </span>
                    <span>Tailored </span> <span>to You</span>
                </h2>
                <p>At our studio, flexibility is key — we offer both retainer and ad hoc engagement models to meet your unique needs and objectives. Whether you require ongoing partnership or support for a one-off project, we deliver tailored solutions designed to bring your vision to life.</p>

                <Primarybutton onClick={handleClickPrimarybutton} text="CONTACT US"/>
            </div>
        </div>

        <div className="bg-layer-topright">
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
        </div>
        <div className="bg-layer-bottomleft">
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
        </div>
    </div>
  )
}

export default Items
