
export default function TopContentSubPages({ headerText, headerBody }: { headerText: string, headerBody: string })  {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">


        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4" data-aos="fade-up">{headerText}</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">{headerBody}</p>

          </div>
        </div>

      </div>
    </section>
  )
}
