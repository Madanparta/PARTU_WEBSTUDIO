import { Link } from 'react-router-dom';
import './privacyandpolicy.scss';
import BG from '../../assets/svgs/BG.svg';
import { useDisableCopyPaste } from '../../hooks/useDisableCopyPaste';
import useScrollToTop from '../../hooks/useScrollToTop';

const Privacyandpolicy = () => {
    useDisableCopyPaste(true);
    useScrollToTop();
  return (
    <div className='policy-component'>

        <div className="infonav">
            <div className='line'></div>
            <p>
                <span><Link to="/">HOME</Link></span>
                <span>/</span>
                <span><Link to="/policy">PRIVACY & POLICY</Link></span>
            </p>
        </div>

        <div className='policy-container'>

            <div className="policyheading-section">
                <h2>Get in touch!</h2>
            </div>

            <div className="policybody-section">
                <div className='section'>
                    <h5>Disclaimer</h5>
                    <p>At Partu Webstudio, we value your trust and are dedicated to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our website, services, and digital platforms.</p>
                </div>

                <div className='section'>
                    <h6>1. Information We Collect</h6>
                    <p>We may collect personal details such as your name, email address, phone number, company information, and any additional data you share through forms, messages, or consultations. <br /> This information helps us deliver our services, communicate effectively, and create a more personalized experience for you.</p>
                </div>

                <div className='section'>
                    <h6>2. How We Use Your Information</h6>
                    <p>
                        Your information is used solely for legitimate business purposes, including:
                        <ul>
                            <li>Providing and managing the services or consultations you request.</li>
                            <li>Responding to your inquiries and offering customer support.</li>
                            <li>Sending relevant updates, resources, or marketing communications (only with your consent).</li>
                            <li>Improving our website’s functionality, content, and overall user experience.</li>
                            <li>Conducting internal analytics to enhance our performance.</li>
                            <li>Meeting legal obligations or enforcing our website policies.</li>
                        </ul>
                        We never sell, trade, or rent your personal data to third parties for marketing purposes.
                    </p>
                </div>

                <div className='section'>
                    <h6>3. Data Security</h6>
                    <p>At Partu Webstudio, we implement industry-standard security protocols to safeguard your personal information against unauthorized access, misuse, or disclosure. <br /> While we take every precaution to protect your data, please note that no online transmission or storage system can be guaranteed to be 100% secure. We continuously work to maintain and improve our security measures.</p>
                </div>

                <div className='section'>
                    <h6>4. Third-Party Services</h6>
                    <p>Our website may integrate with trusted third-party tools (such as analytics providers or payment gateways) to enhance performance and service quality. <br /> These partners are carefully selected and required to adhere to strict privacy and security standards. However, we are not responsible for their individual privacy practices. We encourage you to review the privacy policies of any external sites you visit through our links.</p>
                </div>

                <div className='section'>
                    <h6>5. Cookies & Tracking Technologies</h6>
                    <p>We use cookies and similar technologies to personalize your experience, analyze site traffic, and improve our services. <br /> You can adjust your browser settings to manage or disable cookies. By continuing to browse our website, you consent to the use of cookies in accordance with this policy.</p>
                </div>

                <div className='section'>
                    <h6>6. Your Rights</h6>
                    <p>
                        You have the right to:
                        <ul>
                            <li>Request access to the personal information we hold about you.</li>
                            <li>Request correction or deletion of your data (subject to legal or contractual obligations).</li>
                            <li>Withdraw consent from receiving marketing or promotional messages at any time.</li>
                        </ul>
                        To exercise these rights, please contact us at info.partuwebstudio@gmail.com.
                    </p>
                </div>

                <div className='section'>
                    <h6>8. Contact Us</h6>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us at: <br /> info.partuwebstudio@gmail.com</p>
                </div>

                <div className='section'>
                    <p>Your privacy matters to us. <br /> At Partu Webstudio, we are committed to handling your personal information responsibly and transparently — because your trust is the foundation of everything we create.</p>
                </div>

            </div>

        </div>

        <div className="bg-layer-top">
            <img src={BG} alt=''/>
        </div>
        <div className="bg-layer-center">
            <img src={BG} alt=''/>
            <img src={BG} alt=''/>
        </div>
        <div className="bg-layer-bottom">
            <img src={BG} alt=''/>
        </div>

    </div>
  )
}

export default Privacyandpolicy
