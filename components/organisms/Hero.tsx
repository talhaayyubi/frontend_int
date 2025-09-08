import Button from "../atoms/Button";

export default function Hero() {
  return (
    <section className="max-w-3xl text-center sm:text-left py-8 sm:py-16">
      <h1 className="text-fluid-h1 font-semibold tracking-tight mb-4">Pixel-perfect UI starter</h1>
      <p className="text-lg mb-8 max-w-[66ch] text-muted">
        A minimal implementation of accessible, performant, and responsive UI components built on an 8px grid system.
      </p>
      <div className="flex gap-4 justify-center sm:justify-start">
        <Button>Get Started</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </section>
  );
}
