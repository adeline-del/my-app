
export function AboutCEO() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
src="https://res.cloudinary.com/djfnmztu9/image/upload/v1733632529/ceo_wcygob.jpg"
              alt="CEO Portrait"
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Meet The Innovator</h2>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">IncuVate</h3>
            <p className="text-gray-600 mb-6">
            Samuel Botwe Peprah is the CEO and co-founder of IncuVate. Alongside his father, a dedicated poultry farmer, Samuel launched the business in response to the challenges they faced with transporting day-old chicks. After experiencing significant losses, they saw the need for reliable incubators, initially creating one to solve their own problem. What began as a family solution has grown into a thriving business, with IncuVate now providing innovative, high-quality incubation services to poultry farmers. Samuel's leadership is driven by a commitment to excellence and sustainable growth in the poultry industry.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
              "At IncuVate, we are dedicated to providing top-quality incubation services for farmers and hatchery enthusiasts. With advanced technology and a commitment to care, we ensure that every egg is nurtured to its fullest potential, creating healthy and thriving chicks for your future. Whether you're new to incubation or an experienced breeder, we're here to help your hatcheries thrive with excellence every step of the way."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}