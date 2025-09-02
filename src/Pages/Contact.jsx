
import React from 'react';
// import { ContactInquiry } from '@/entities/ContactInquiry';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock
} from 'lucide-react';

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   company: '',
  //   subject: '',
  //   message: '',
  //   inquiry_type: 'general'
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);


  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@opsygen.io",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (647) 547-5838",
      subtitle: "Monday to Friday, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Headquarters",
      details: "Toronto, Ontario, Canada",
      subtitle: "Serving clients worldwide"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Support",
      details: "24/7 Available",
      subtitle: "Global support for enterprise clients"
    }
  ];

  // if (isSubmitted) {
  //   return (
  //     <div className="py-24">
  //       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  //         <div className="glass-effect rounded-3xl p-12">
  //           <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
  //           <h1 className="text-4xl font-light text-white mb-6">Thank You!</h1>
  //           <p className="text-xl text-slate-300 font-light mb-8">
  //             We've received your message and will get back to you within 24 hours.
  //           </p>
  //           <Button
  //             onClick={() => setIsSubmitted(false)}
  //             className="accent-gradient hover:shadow-lg transition-all"
  //           >
  //             Send Another Message
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="py-12">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight">
            Contact <span className="text-gradient">Opsygen</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Reach us via email, phone, or visit our headquarters.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-light text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-purple-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <p className="text-slate-300 font-light">{info.details}</p>
                      <p className="text-slate-400 text-sm font-light">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
