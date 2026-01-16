import { Container, Heading, Paragraph, Highlight } from "@/components";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaClock, FaBriefcase, FaRocket, FaGraduationCap, FaComments, FaStar } from "react-icons/fa";
import { GoLink } from "react-icons/go";

const Contact = () => {
  const contactMethods = [
    {
      title: "E-mail",
      description: "Easiest way to reach me",
      value: "yuri.claro@outlook.com",
      href: "mailto:yuri.claro@outlook.com",
      icon: <FaEnvelope className="text-2xl text-gray-600 dark:text-gray-400" />
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "@Yuri Claro",
      href: "https://linkedin.com/in/yuriclaro",
      icon: <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-400" />
    },
    {
      title: "GitHub",
      description: "Check out my projects",
      value: "@yuriclaro",
      href: "https://github.com/yuriclaro",
      icon: <FaGithub className="text-2xl text-gray-900 dark:text-white" />
    },
  ];

  const timeZone = {
    location: "São Paulo, Brazil",
    timezone: "UTC-3",
    workingHours: "7:30 AM - 15:30 PM (GMT-3)"
  };

  return (
    <Container className="pt-16 lg:pt-20 pb-16 lg:pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <Heading className="text-4xl md:text-5xl font-bold mb-6">
            Let's <Highlight variant="primary">Connect</Highlight>
          </Heading>

          <Paragraph className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            I'm always excited to discuss new opportunities, collaborate on interesting projects,
            or simply chat about technology and development. Feel free to reach out!
          </Paragraph>
        </div>

        {/* Contact Methods */}
        <div className="animate-fadeInUp">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group block p-6 rounded-xl transition-all duration-300 border-b-2 border-transparent hover:border-gray-900 dark:hover:border-white"
              >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center">{method.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                      {method.title}
                    </h3>
                    <GoLink className="text-xl text-gray-600 dark:text-gray-400" />
                  </div>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white group-hover:underline">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="p-8 mb-12 border-t border-b border-gray-200 dark:border-gray-800">
          <Heading as="h3" className="text-2xl font-bold mb-4">
            🌍 <Highlight variant="primary">Availability & Location</Highlight>
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold text-xl mx-auto mb-3">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">{timeZone.location}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold text-xl mx-auto mb-3">
                <FaClock />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Timezone</h4>
              <p className="text-gray-600 dark:text-gray-400">{timeZone.timezone}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold text-xl mx-auto mb-3">
                <FaBriefcase />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-400">{timeZone.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-12">
          <Heading as="h3" className="text-2xl font-bold mb-6">
            <Highlight variant="primary">What I'm Looking For</Highlight>
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                <FaRocket />
                Web Projects
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• React/Next.js applications</li>
                <li>• Landing pages & websites</li>
                <li>• UI/UX implementation</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="p-6">
              <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                <FaGraduationCap />
                Learning Opportunities
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Junior developer roles</li>
                <li>• Internship opportunities</li>
                <li>• Mentorship programs</li>
                <li>• Open source collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 border-t border-gray-200 dark:border-gray-800">
          <Heading as="h3" className="text-2xl font-bold mb-4">
            <Highlight variant="primary">Ready to Start Something Great?</Highlight>
          </Heading>
          <Paragraph className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you have a project idea, want to collaborate, or just want to say hello,
            I'd love to hear from you. Let's build something amazing together!
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yuri.claro@outlook.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <FaEnvelope className="text-lg" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yuriclaro"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white hover:bg-gray-900 dark:hover:bg-white text-gray-900 dark:text-white hover:text-white dark:hover:text-gray-900 font-medium rounded-lg transition-colors duration-200"
            >
              <FaLinkedin className="text-lg" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
