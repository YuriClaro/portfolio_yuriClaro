import { Container, Heading, Paragraph } from "@/components";

export default function About() {
  return (
    <Container className="flex items-center justify-center px-4 py-6 lg:py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="space-y-8">
          <Heading className="text-4xl md:text-5xl font-bold">About Me</Heading>
          <Paragraph className="text-lg">
            Welcome to my portfolio. I'm a passionate full-stack developer with a focus on creating modern, 
            scalable web applications. With experience in React, Next.js, TypeScript, and Node.js, 
            I combine technical expertise with creative problem-solving.
          </Paragraph>
        </div>
      </div>
    </Container>
  );
}
