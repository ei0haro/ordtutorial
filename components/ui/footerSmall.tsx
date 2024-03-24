import React from 'react'
import Link from 'next/link'
import SyncingOrd from "@/public/images/syncing ord with wizard 2.gif";
import Image from "next/image";

export default function FooterSmall() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">



          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">


            <div className="flex-grow">
              <Image
                  src={SyncingOrd}
                  alt="Syncing ord wizardstyle"
                  width={1080} // Desired width (replace with your values)
                  height={60} // Desired height (replace with your values)
                  className="image max-w-full mx-auto md:max-w-none"
              />
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
