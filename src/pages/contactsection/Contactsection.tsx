import './contactsection.scss';
import BG from '../../assets/svgs/BG.svg';
import { Link } from 'react-router-dom';
import arrowbottom from '../../assets/svgs/right-arrow.svg';
import Primarybutton from '../../components/primarybutton/Primarybutton';
import { useRef, useState } from 'react';
import { useDisableCopyPaste } from '../../hooks/useDisableCopyPaste';
import axios from 'axios';
import useScrollToTop from '../../hooks/useScrollToTop';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contactsection = () => {
  useDisableCopyPaste(true);
  useScrollToTop();
  const contactSelectionRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToServices = () => {
    const el = contactSelectionRef.current;
    if(el){
      setTimeout(()=>{
        el.scrollIntoView({
          behavior:'smooth',
          block:"start"
        })
      },300)
    }
  };

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name can only contain letters and spaces';
        return undefined;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return undefined;
      
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[\d\s+\-()]{10,}$/.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 500) return 'Message must be less than 500 characters';
        return undefined;
      
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const phoneValue = value.replace(/[^\d\s+\-()]/g, '');
      setFormData(prev => ({ ...prev, [name]: phoneValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    
    setTouched(allTouched);

    if (validateForm()) {

      const payload = {
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_USER_ID,
        template_params: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
      };

      setIsSubmitting(true);

      try {
        const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send",payload,{
          headers:{"Content-Type": "application/json",Origin: window.location.origin,}
        });

        if(response.status === 200){
          alert('Thank you for your message! We will get back to you soon.'); 
          setIsSubmitting(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
          setTouched({});
        }
      } catch (error) {
        setIsSubmitting(false);
        alert('Something went wrong!. Please try again later.'); 
      }
    }
  };

  // const sendWhatsAppNotification = async (formData: any) => {
  //   const emailPayload = {
  //     to: '9220305374@whatsapp.com',
  //     subject: 'New Contact Form Submission',
  //     html: `
  //       <h3>New Contact Form Submission</h3>
  //       <p><strong>Name:</strong> ${formData.name}</p>
  //       <p><strong>Email:</strong> ${formData.email}</p>
  //       <p><strong>Phone:</strong> ${formData.phone}</p>
  //       <p><strong>Message:</strong> ${formData.message}</p>
  //       <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
  //     `
  //   };

  //   await axios.post('/api/send-email', emailPayload);
  // };

  return (
    <div className='contact-component'>
      <div className="infonav">
        <div className='line'></div>
        <p>
          <span><Link to="/">HOME</Link></span>
          <span>/</span>
          <span><Link to="/contact">CONTACT</Link></span>
        </p>
      </div>

      <div className="contact-container">
        <form onSubmit={handleSubmit} noValidate>
          <div className="contactheading-section">
            <h2>Get in touch!</h2>
            <div className='arrowdown' onClick={scrollToServices}>
              <span>
                <img src={arrowbottom} alt="" />
              </span>
            </div>
          </div>

          <div className="contactbody-section" ref={contactSelectionRef}>
            <h4>
              <span>Let's</span>
              <span>Talk</span>
            </h4>

            <div className='inputsalgin'>
              <div className={`inputcontainer name ${errors.name && touched.name ? 'error' : ''}`}>
                <label htmlFor="name">WHAT'S YOUR NAME</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className={touched.name && formData.name ? 'has-value' : ''}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && touched.name && (
                  <span className="error-message" id="name-error">{errors.name}</span>
                )}
              </div>

              <div className={`inputcontainer email ${errors.email && touched.email ? 'error' : ''}`}>
                <label htmlFor="email">YOUR EMAIL</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className={touched.email && formData.email ? 'has-value' : ''}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && touched.email && (
                  <span className="error-message" id="email-error">{errors.email}</span>
                )}
              </div>
            </div>

            <div className={`inputcontainer number ${errors.phone && touched.phone ? 'error' : ''}`}>
              <label htmlFor="phone">YOUR CONTACT NUMBER</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={touched.phone && formData.phone ? 'has-value' : ''}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && touched.phone && (
                <span className="error-message" id="phone-error">{errors.phone}</span>
              )}
            </div>

            <div className={`inputcontainer details ${errors.message && touched.message ? 'error' : ''}`}>
              <label htmlFor="message">WHAT WOULD YOU LIKE TO TALK ABOUT?</label>
              <textarea 
                rows={8}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={touched.message && formData.message ? 'has-value' : ''}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && touched.message && (
                <span className="error-message" id="message-error">{errors.message}</span>
              )}
              <div className={`character-count ${formData.message.length > 450 ? 'warning' : ''} ${formData.message.length > 500 ? 'error' : ''}`}>
                {formData.message.length}/500
              </div>
            </div>
          </div>

          <div className="contactfooter-section">
            <p>
              <span className='impo'>*</span>
              <span>We promise not to disclose your personal information to third parties.</span>
            </p>
            <Primarybutton 
              type="submit"
              text={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              disabled={isSubmitting}
              loading={isSubmitting}
              className={isSubmitting ? 'submitting' : ''}
            />
          </div>
        </form>
      </div>

      <div className="bg-layer-top">
        <img src={BG} alt="Background decoration" />
      </div>
      <div className="bg-layer-bottom">
        <img src={BG} alt="Background decoration" />
      </div>
    </div>
  )
}

export default Contactsection