import Section from '../common/Section';
import Container from '../common/Container';
import { socialLinks } from '../../data/contactInfo';

export default function LocationMap() {
  return (
    <Section className="bg-[#f7f6fb]">
      <Container>
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169579726!2d78.24323209999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
            loading="lazy"
            title="Hyderabad Location"
          ></iframe>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center pointer-events-auto">
              <div className="w-10 h-10 rounded-full bg-[#6c47ff] mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-lg">📍</span>
              </div>
              <p className="text-sm font-semibold text-[#0f0d1a] mb-1">
                Global Headquarters
              </p>
              <p className="text-xs text-gray-600">Hyderabad, India</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-6">
            Follow Our Journey
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#6c47ff] hover:border-[#6c47ff] hover:shadow-md transition-all duration-300"
                  aria-label={social.name}
                >
                  <IconComponent className="text-xl" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
