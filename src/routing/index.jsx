import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import NetProIcon from "../components/netProIcon"
import HomeCustomers from "../components/HomeCustomers"
import React from 'react'
import ProductSingle from "../pages/ProductSingle"
import GalleryBlog from "../pages/GalleryBlog"
import BlogSingle from "../pages/BlogSingle"
import Services from "../pages/Services"
import ServicesSingle from "../pages/ServicesSingle"
import NotFound from "../pages/NotFound"

const WebRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/haqqımızda" element={<About />} />
                <Route path="/əlaqə" element={<Contact />} />
                <Route path="/məhsullar/:slug" element={<ProductSingle />} />
                <Route path="/qaleriya-bloq" element={<GalleryBlog />} />
                <Route path="/qaleriya-bloq/bloq/:slug" element={<BlogSingle />} />
                <Route path="/xidmətlər-və-həllər" element={<Services />} />
                <Route path="/xidmətlər-və-həllər/:slug" element={<ServicesSingle />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    )
}
export default WebRouting
