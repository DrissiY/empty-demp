import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import { gql } from "@apollo/client";
import ProductItems from "../product-box/ProductBox1";
import { Row, Col, Container, Media } from "reactstrap";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import search from "../../../public/assets/images/empty-search.jpg";
import { shopifyFetch } from "../../../Api";
import { RECOMMENDED_PRODUCTS_QUERY } from "../../../queries";
import { fetchData } from "../../../config/data/fetchin";
const GET_PRODUCTS = gql`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        stock
        sale
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;
let products;
async function useFetchedData() {
  try {
    products = await fetchData();
    // Do something with the shop data here
    // Use the shopData in your component
  } catch (error) {
    console.error("Error:", error);
    // Handle errors if needed
  }
}
const TopCollection = ({
  type,
  title,
  subtitle,
  designClass,
  noSlider,
  cartClass,
  productSlider,
  titleClass,
  noTitle,
  innerClass,
  inner,
  backImage,
}) => {
  const context = useContext(CartContext);
  const contextWishlist = useContext(WishlistContext);
  const comapreList = useContext(CompareContext);
  const quantity = context.quantity;
  const [delayProduct, setDelayProduct] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Call the fetchData function when the component mounts
    async function getProducts() {
      try {
        const fetchedProducts = await fetchData();
        setProducts(fetchedProducts); // Set the products in the component state
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors if needed
      }
    }

    getProducts();
  }, []);
  var { loading } = shopifyFetch(RECOMMENDED_PRODUCTS_QUERY, {
    variables: {
      type: type,
      indexFrom: 0,
      limit: 8,
    },
  });
  var data = products;
  console.log(products);

  useEffect(() => {
    if (data === undefined) {
      noSlider === false;
    } else {
      noSlider === true;
    }
    setTimeout(() => {
      setDelayProduct(false);
    }, 1);
  }, [delayProduct]);

  return (
    <>
      <section className={designClass}>
        {noSlider ? (
          <Container>
            <Row>
              <Col>
                {noTitle === "null" ? (
                  ""
                ) : (
                  <div className={innerClass}>
                    {subtitle ? <h4>{subtitle}</h4> : ""}
                    <h2 className={inner}>{title}</h2>
                    {titleClass ? (
                      <hr role="tournament6" />
                    ) : (
                      <div className="line">
                        <span></span>
                      </div>
                    )}
                  </div>
                )}

                {delayProduct ? (
                  <div className="row mx-0 margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  <Slider {...productSlider} className="product-m no-arrow">
                    {products.map((product, i) => (
                      <div key={i}>
                        <ProductItems
                          product={product}
                          title={title}
                          addWishlist={() => contextWishlist.addToWish(product)}
                          addCart={() => context.addToCart(product, quantity)}
                          addCompare={() => comapreList.addToCompare(product)}
                          cartClass={cartClass}
                          backImage={backImage}
                        />
                      </div>
                    ))}
                  </Slider>
                )}
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            {title ? (
              <div className="title1 title-gradient  section-t-space">
                <h4>{subtitle}</h4>
                <h2 className="title-inner1">{title}</h2>
                <hr role="tournament6" />
              </div>
            ) : (
              ""
            )}
            <Container>
              <Row className="margin-default">
                {!data ||
                !data.products ||
                !data.products.items ||
                !data.products.items.length === 0 ||
                loading ? (
                  <div className="row margin-default">
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-6">
                      <PostLoader />
                    </div>
                  </div>
                ) : (
                  data &&
                  data.products.items.slice(0, 8).map((product, index) => (
                    <Col xl="3" sm="6" key={index}>
                      <div>
                        <ProductItems
                          product={product}
                          backImage={backImage}
                          addCompare={() => comapreList.addToCompare(product)}
                          addWishlist={() => contextWishlist.addToWish(product)}
                          title={title}
                          cartClass={cartClass}
                          addCart={() => context.addToCart(product, quantity)}
                          key={index}
                        />
                      </div>
                    </Col>
                  ))
                )}
              </Row>
            </Container>
          </>
        )}
      </section>
    </>
  );
};

export default TopCollection;
