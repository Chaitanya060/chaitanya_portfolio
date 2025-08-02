import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96522504888",
      href: "tel:+919652250488",
      color: "text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      value: "chaitanyakishorebatta@gmail.com",
      href: "mailto:chaitanyakishorebatta@gmail.com",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chaitanya-kishore",
      href: "https://www.linkedin.com/in/chaitanya-kishore/",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Chaitanya060",
      href: "https://github.com/Chaitanya060/",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-surface/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Feel free to reach out for collaboration or opportunities!
          </p>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, and potential opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <div key={index} className="card-elevated p-8 rounded-xl group hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-muted/20`}>
                    <contact.icon className={`${contact.color}`} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 gradient-text">
                      {contact.label}
                    </h3>
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="card-elevated p-12 rounded-xl text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Whether you're looking for a full-stack developer, cloud solutions architect, 
                or someone passionate about innovative technology solutions, I'd love to hear from you.
              </p>
              
              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary px-8 py-3 text-lg"
                  onClick={() => window.location.href = 'mailto:chaitanyakishorebatta@gmail.com'}
                >
                  <Send className="mr-2" size={20} />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.linkedin.com/in/chaitanya-kishore/', '_blank')}
                >
                  <Linkedin className="mr-2" size={20} />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              <span>Based in Vijayawanda, India</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Open to remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;