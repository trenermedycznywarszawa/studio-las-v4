interface TestimonialsMiniProps {
  persona: 'senior' | 'office' | 'athlete';
}

const testimonialsByPersona = {
  senior: [
    {
      name: 'Elżbieta',
      age: '62',
      text: 'Po kilku tygodniach mam mniej bólu w odcinku lędźwiowym i w końcu śpię spokojniej.',
    },
    {
      name: 'Andrzej',
      age: '58',
      text: 'Najbardziej doceniam spokój, kontrolę i to, że każdy trening ma sens.',
    },
  ],
  office: [
    {
      name: 'Marek',
      age: '41',
      text: 'Po miesiącu czuję, że plecy trzymają. Mniej bólu, więcej spokoju w ciele.',
    },
    {
      name: 'Karolina',
      age: '33',
      text: 'W końcu trening jest logiczny: wiem co robię i po co.',
    },
  ],
  athlete: [
    {
      name: 'Tomasz',
      age: '28',
      text: 'Wróciłem do treningów po urazie bez strachu, a wyniki zaczęły iść w górę.',
    },
    {
      name: 'Paweł',
      age: '32',
      text: 'Pierwszy raz czuję, że mam plan, a nie losowe jednostki.',
    },
  ],
};

export default function TestimonialsMini({
  persona,
}: TestimonialsMiniProps) {
  const testimonials = testimonialsByPersona[persona];

  return (
    <section className="section-padding bg-white border-t">
      <div className="container-app">
        <h2 className="heading-lg text-center mb-12">Historie podobne do Twojej</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="font-semibold">
                {testimonial.name}, {testimonial.age} lat
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
