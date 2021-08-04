import * as React from "react"
import Seo from "../components/common/seo"
import PageLayout from "../components/pageLayout.js"
import Kv from "../components/info/kv.js"
import Info from "../components/info/info.js"

const InfoPage = () => {

  return (
    <PageLayout>
        <Seo title="Tagame City Tourism Association" />
        <Kv />
        <Info/>
    </PageLayout>
  )
}



export default InfoPage