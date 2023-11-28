import axios from 'axios';
import cors from "cors";





async function Getcollections() {
  try {
    const query = {
      query: `
        {
            collections(first: 10) {
                edges {
                  node {
                    title
                    id
                    image {
                      id
                    }
                  }
                }
              }
        },
      `,
    }
    const response = await axios.post(
      'https://ethni01.myshopify.com/api/2023-10/graphql.json',
      query,
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': 'f3a10d22bc94caeb6bddb5e034282485',
          'Content-Type': 'application/json',
        },
      }
    )
    //   console.log('datata',response.data)
    return response.data
  } catch (error) {
    // console.error('Error fetching data:', error)
  }
}
// async function useFetchedData() {
//   try {
//     const fetchedData = await fetchData()
//     // Now fetchedData contains the object fetched from the GraphQL API
//    // console.log(fetchedData) // Use fetchedData as needed in other components
//   } catch (error) {
//     // Handle errors if needed
//   //  console.error('Error in using fetched data:', error)
//   }
// }
module.exports = { Getcollections }