import axios from "axios";
async function fetchData() {
  try {
    const query = {
      query: `
      {

        products(first: 10) {
             edges {
               node {
                 id
                 title
                 description
               }
             }
           }
        }
        
      `,
    };
    const response = await axios.post(
      "https://ethni01.myshopify.com/api/2023-10/graphql.json",
      query,
      {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            "f3a10d22bc94caeb6bddb5e034282485",
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
