// Fetch data from Contentstack
export async function getEntryById(contentType, entryId) {
  const url = `${process.env.REACT_APP_DELIVERY_BASEURL}/content_types/${contentType}/entries/${entryId}?environment=${process.env.REACT_APP_ENVIRONMENT}`;

  const rawResponse = await fetch(url, {
    headers: {
      api_key: process.env.REACT_APP_API_KEY,
      access_token: process.env.REACT_APP_DELIVERY_TOKEN,
    },
  });

  const response = await rawResponse.json();

  return response ?? {};
}
