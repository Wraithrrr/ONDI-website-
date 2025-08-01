'use client';

export default function SimpleHero() {
  return (
    <section className="min-h-screen bg-blue-900 flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6">
          ONDI
        </h1>
        <h2 className="text-4xl font-semibold mb-4">
          Office for Nigerian Digital Innovation
        </h2>
        <p className="text-xl mb-8">
          Empowering Nigeria&apos;s digital future through innovation, talent development, and strategic partnerships.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold">
            Explore Programs
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
