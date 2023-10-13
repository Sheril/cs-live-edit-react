import { useEffect, useState } from "react";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { getEntryById } from "./utils/getEntryById";

// Styles that are required for the Edit Button
import "@contentstack/live-preview-utils/dist/main.css";

// Initialize Contentstack Live Preview
ContentstackLivePreview.init({
  stackDetails: {
    apiKey: process.env.api_key,
  },
});

export function Page() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Get Published Data
    getEntryById(
      process.env.REACT_APP_CONTENT_TYPE_UID,
      process.env.REACT_APP_ENTRY_UID
    ).then((entry) => {
      setData(entry);
    });
  }, []);

  // Alternatively you can use the Contentstack's Utility SDK to populate this for you.
  // Library: https://github.com/contentstack/contentstack-utils-javascript/
  // Method: addEditableTags(entry, content_type_uid, tagsAsObject, locale)
  // Function: https://github.com/contentstack/contentstack-utils-javascript/blob/master/src/entry-editable.ts

  const dataCslpBase = `${process.env.REACT_APP_CONTENT_TYPE_UID}.${process.env.REACT_APP_ENTRY_UID}.en-us`;

  return (
    <div>
      <h1 data-cslp={`${dataCslpBase}.headline`}>{data?.entry?.headline}</h1>
      <p data-cslp={`${dataCslpBase}.description`}>
        {data?.entry?.description}
      </p>
    </div>
  );
}
