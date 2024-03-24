
import FrontPageGrid from "@/components/frontpagegrid";
import TopContentFrontPage from "@/components/topContentFrontPage";

export default function FrontPage() {
  return (
      <section>

          <TopContentFrontPage headerText="Ord tutorials"
                               headerBody="Tutorials for ord"/>
          <FrontPageGrid/>

      </section>
  )
}
