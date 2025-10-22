import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle">
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              Welcome to Your
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Beautiful Space
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
              A simple, elegant starting point for something amazing. 
              Clean design meets endless possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delay">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
