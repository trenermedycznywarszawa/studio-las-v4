interface PASSectionProps {
  problem: {
    title: string;
    description: string;
  };
  agitation: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

export default function PASSection({
  problem,
  agitation,
  solution,
}: PASSectionProps) {
  return (
    <>
      {/* PROBLEM */}
      <section className="section-padding bg-white border-t">
        <div className="container-app">
          <h2 className="heading-lg mb-6">{problem.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {problem.description}
          </p>
        </div>
      </section>

      {/* AGITATION */}
      <section className="section-padding bg-red-50 border-t">
        <div className="container-app">
          <h2 className="heading-lg mb-6">{agitation.title}</h2>
          <p className="text-lg text-gray-600 whitespace-pre-wrap max-w-2xl">
            {agitation.description}
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section-padding bg-green-50 border-t">
        <div className="container-app">
          <h2 className="heading-lg mb-6 text-green-900">
            {solution.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            {solution.description}
          </p>
        </div>
      </section>
    </>
  );
}
