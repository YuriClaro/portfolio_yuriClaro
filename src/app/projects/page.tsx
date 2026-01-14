import { Container, Heading, Paragraph } from "@/components";

export default function Projects() {
  return (
    <Container className="flex items-center justify-center px-4 py-6 lg:py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-8">
          <Heading className="text-4xl md:text-5xl font-bold">My Projects</Heading>
          <Paragraph className="text-lg">
            Here you'll find some of my recent projects and work samples. 
            Each project represents my dedication to building quality software.
          </Paragraph>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-400">Add your project description here</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 2</h3>
              <p className="text-gray-600 dark:text-gray-400">Add your project description here</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
