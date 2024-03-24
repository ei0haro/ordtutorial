import HeaderWithImage from "@/components/headerwithimage";
import HeaderWithImageMobile from "@/components/headerwithimagemobile";
import JoinUs from "@/public/images/wiz.jpeg";

export default function TopContentFrontPage({ headerText, headerBody }: { headerText: string, headerBody: string })  {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="hidden md:flex justify-center items-center">
            <HeaderWithImage imageSrc={JoinUs}></HeaderWithImage>
            </div>
            <div className="md:hidden">
                <HeaderWithImageMobile imageSrc={JoinUs}></HeaderWithImageMobile>
            </div>

            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">{headerBody}</p>

          </div>
        </div>

      </div>
    </section>
  )
}
