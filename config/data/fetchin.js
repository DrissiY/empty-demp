import axios from "axios";

const header = {
  "X-Shopify-Storefront-Access-Token": "c1ea70fefe6a589b91e2e85500c058e3",
  "Content-Type": "application/json",
};
const url = "https://ethnibeautymarket.com/api/2023-10/graphql.json";
async function fetchData(query) {
  try {
    const response = await axios.post(url, query, {
      headers: header,
    });

    return response.data.data.products.edges.map((edge) => edge.node);
  } catch (error) {
    // console.error('Error fetching data:', error)
  }
}

module.exports = { fetchData };
