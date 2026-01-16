import { Container, Heading, Paragraph, Highlight } from "@/components";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Platform for Performance Parts",
      description: "A full-featured ecommerce platform specializing in performance car parts, built with Nest.js and Stripe integration.",
      tech: ["Node.js", "TypeScript", "React", "AI API Integration"],
      status: "Completed",
      features: [
        "Add items to shopping cart",
        "Secure checkout with Stripe",
        "Product tracking",
      ],
      category: "Personal Project",
      github: "https://github.com/YuriClaro/eCommerce-project"
    },  
    {
      title: "Salary Management System",
      description: "Development of a salary management system with an architecture composed of four microservices orchestrated via Docker. APIs are secured with Spring Security and JWT, data auditing is handled with Hibernate Envers, and database versioning is managed using Liquibase. Asynchronous communication via Apache Kafka is used to send Excel reports to the authenticated user.",
      tech: ["Java", "Spring Boot", "Docker", "Kafka", "PostgreSQL"],
      status: "Completed",
      features: [
        "JWT Authentication with refresh token support",
        "Salary management (CRUD operations with pagination)",
        "Salary component configuration and management",
        "Advanced search by status and date range",
        "Salary proposal acceptance workflow",
        "Collaborator-specific salary retrieval",
        "Excel export with multiple filters (all, date range, status, collaborator)",
        "Microservices architecture with Docker orchestration",
        "Hibernate Envers for comprehensive data auditing",
        "Liquibase for database versioning and migrations",
        "Apache Kafka for asynchronous report generation and email delivery",
        "Role-based access control for authenticated users"
      ],
      category: "Professional Project",
      github: "https://github.com/YuriClaro/Salary-Management-System",
    },
    {
      title: "Automated Contract Expiration Notification System",
      description: "Developed an automated email notification system at Embraer using Apex within Salesforce. The system automatically identifies contracts nearing expiration, selects the appropriate contacts, and sends notification emails without manual intervention, resulting in 100% time savings for the contracts team.",
      tech: ["Apex", "Salesforce", "SOQL", "Email Automation"],
      status: "Completed",
      features: [
        "Automatic identification of expiring contracts",
        "Smart contact selection based on contract relationships",
        "Automated email dispatch system",
        "100% reduction in manual email sending time",
        "Integration with Salesforce CRM data",
        "Scheduled batch processing for notifications",
        "Custom email templates and content generation",
      ],
      category: "Professional Project",
    },
    {
      title: "Aircraft Equipment Intelligence System",
      description: "Developed a comprehensive data intelligence solution at Embraer integrating Power BI, Copilot Studio, and Salesforce. The system maps each aircraft by Serial Number, analyzes installed products, and generates actionable insights for the sales team to identify upselling opportunities and help customers equip their aircraft with additional products.",
      tech: ["Power BI", "Copilot Studio", "Salesforce", "Data Analytics", "SOQL"],
      status: "In Progress",
      features: [
        "Aircraft tracking by Serial Number",
        "Product inventory mapping per aircraft",
        "Automated sales insights generation",
        "Integration between Power BI and Salesforce",
        "Copilot Studio for intelligent recommendations",
        "Upselling opportunity identification",
        "Customer equipment gap analysis",
        "Real-time dashboard for sales team",
      ],
      category: "Professional Project",
    },
    {
      title: "Ambula's Multi-Platform Application",
      description: "Contributed as an intern at Ambula's to develop a comprehensive ambulance management system using Flutter Flow, Supabase, and Figma. Created multiple web pages for ambulance registration, real-time tracking, authentication, and user management, delivering both web and mobile versions for a complete cross-platform solution.",
      tech: ["Flutter Flow", "Supabase", "Figma", "Flutter", "Mobile Development"],
      status: "Completed",
      features: [
        "Ambulance registration system",
        "Real-time vehicle tracking",
        "User authentication (login and sign-up)",
        "Web and mobile versions",
        "Responsive UI/UX design with Figma",
        "Backend integration with Supabase",
        "Cross-platform compatibility",
        "Database management for fleet operations",
      ],
      category: "Professional Project",
    },
    {
      title: "AI Agents Ecosystem for Commercial Aviation CRM",
      description: "Currently developing a suite of AI agents using Copilot Studio integrated with Salesforce at Embraer. The system provides intelligent assistance for Commercial Aviation CRM, supporting product governance, opportunity management, contract administration, and sales processes through multiple specialized AI agents working together.",
      tech: ["Copilot Studio", "Salesforce", "AI Agents", "CRM", "Automation"],
      status: "In Progress",
      features: [
        "Multiple specialized AI agents",
        "Salesforce CRM integration",
        "Product governance assistance",
        "Opportunity management support",
        "Contract administration automation",
        "Sales process optimization",
        "Intelligent decision-making support",
        "Commercial Aviation domain expertise",
      ],
      category: "Professional Project",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800";
      case "In Development":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      case "Ongoing":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Professional Project":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "Personal Project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      // ... (adicione os outros cases)
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Container className="pt-16 lg:pt-20 pb-16 lg:pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <Heading className="text-4xl md:text-5xl font-bold mb-6">
            My <Highlight variant="primary">Projects</Highlight>
          </Heading>
          
          <Paragraph className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            From enterprise solutions at Embraer to personal learning projects, here's a showcase of my development journey 
            spanning Salesforce, Java, React, NextJS, and full-stack applications.
          </Paragraph>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-black dark:bg-black rounded-lg border border-white dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 overflow-hidden animate-fadeInUp hover:shadow-lg hover:shadow-blue-500/10`} style={{animationDelay: `${index * 100}ms`}}>
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <Heading as="h3" className="text-2xl font-bold text-white">
                        {project.title}
                      </Heading>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                    <Paragraph className="text-gray-400 mb-4">
                      {project.description}
                    </Paragraph>
                  </div>
                  <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-400">
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:border-blue-500 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {project.github && (
                  <div className="flex gap-4 pt-4 border-t border-gray-800">
                    <a 
                      href={project.github}
                      className="inline-flex items-center px-4 py-2 text-white rounded-lg transition-all duration-200 font-medium hover:border hover:border-white hover:bg-white hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📂 View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Journey */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-900/20 dark:via-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl animate-fadeInUp" style={{animationDelay: '600ms'}}>
          <Heading as="h3" className="text-2xl font-bold mb-4">
            🚀 My Professional Journey
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                💼
              </div>
              <h4 className="font-semibold mb-2">Enterprise Solutions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                1+ years of experience developing robust solutions using Full Stack technologies, Salesforce and AI integrations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                ⚙️
              </div>
              <h4 className="font-semibold mb-2">Full-Stack Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proficient in JavaScript, React, TypeScript, Node.js, Nest.js, Java, and Salesforce platform technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                🌐
              </div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fluent in English and a Native Portuguese Brazilian speaker
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
