interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  steps: Step[];
}

export default function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <section className="section-padding bg-white border-t">
      <div className="container-app">
        <h2 className="heading-lg text-center mb-12">{title}</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number}>
              {/* Number Circle */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-center mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {step.description}
              </p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center mt-6">
                  <div className="text-primary-500 text-3xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
