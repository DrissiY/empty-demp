import axios from "axios";
async function fetchData() {
  try {
    const query = {
      query: `
      {

        products(first: 10) {
          edges {
            node {
              description
              featuredImage {
                transformedSrc(preferredContentType: WEBP)
              }
              id
              images(first: 10) {
                edges {
                  node {
                    transformedSrc(preferredContentType: WEBP)
                  }
                }
              }
              title
              tags
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        }
        
      `,
    };
    const response = await axios.post(
      "https://ethnibeautymarket.com/api/2023-10/graphql.json",
      query,
      {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            "c1ea70fefe6a589b91e2e85500c058e3",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.products.edges.map((edge) => edge.node);
  } catch (error) {
    // console.error('Error fetching data:', error)
  }
}

module.exports = { fetchData };
