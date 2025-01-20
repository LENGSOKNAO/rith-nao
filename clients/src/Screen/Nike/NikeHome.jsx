import React from "react";
import Layout from "../../Layout/Layout";
import BannerNike from "../../Components/Home/Nike/BannerNike";
import NewProduct from "../../Components/Home/Nike/NewProduct";
import Video from "../../Components/Home/Nike/Video";
import ProductSlider from "../../Components/Home/Nike/ProductSlider";

const NikeHome = () => {
  return (
    <Layout>
      <BannerNike />
      <NewProduct />
      <Video />
      <ProductSlider />
    </Layout>
  );
};

export default NikeHome;
