import React, { useEffect, Fragment } from "react";
import Banner from "./layouts/Jewellery/Component/Banner";
import TopCollection from "../components/common/Collections/Collection3";
import SpecialProducts from "../components/common/Collections/TabCollection1";
import Instagram from "../components/common/instagram/instagram1";
import Paragraph from "../components/common/Paragraph";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import HeaderSeven from "../components/headers/header-seven";
import Category from "./layouts/Jewellery/Component/Category";
import { Product4 } from "../services/script";
import Service from "../components/common/Service/service3";
import MasterParallaxBanner from "./layouts/Jewellery/Component/MasterParallaxBanner";
import FooterFive from "../components/footers/footer-five";


const Jewellery = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#5fcbc4");
  });
  
  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/16.png"} />
      </Helmet>
      <div className="bg_cls">
        <ModalComponent />
        <HeaderSeven logoName={"logo/13.png"} />
        <Banner />
        <Category />
        <Paragraph
          title="title1  section-t-space title5"
          inner="title-inner1"
          hrClass={true}
        />
        <TopCollection
          type="jewellery"
          designClass="p-t-0 j-box ratio_square"
          productSlider={Product4}
          noSlider="true"
          cartClass="cart-info cart-wrap"
        />
        <Service layoutClass="section-b-space" />
        <MasterParallaxBanner
          bg="parallax-banner18"
          parallaxClass="text-center p-left"
          title="sale"
          subTitle1="fashion trends"
          subTitle2="special offer"
        />
        <SpecialProducts
          type="jewellery"
          heading="exclusive products"
          title="title1  section-t-space title5"
          inner="title-inner1"
          hrClass={true}
          designClass="p-t-0 j-box ratio_square"
          noSlider="true"
          cartClass="cart-info cart-wrap"
        />
        <section className="instagram ratio_square section-b-space">
          <Instagram type="jewellery" />
        </section>
        <FooterFive logoName={"logo/13.png"} layoutClass="black-subfooter" />
      </div>
    </Fragment>
  );
};

export default Jewellery;