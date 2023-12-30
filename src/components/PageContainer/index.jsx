import PageBanner from "../Banner"
import Footer from "../Footer"
import { Header } from "../Header"

const PageContainer = ({ children, titleHref='', bannerTitle = "", slug = '', slugTitle=''}) => {
    return (
        <>
            <Header/>
            {bannerTitle && <PageBanner title={bannerTitle} slug={slug} titleHref={titleHref} slugTitle={slugTitle}/>}
            {children}
            <Footer />
        </>
    )
}
export default PageContainer
