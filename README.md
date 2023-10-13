# Contentstack's Live Edit Functionality

Live Edit is an additional feature that comes along with [Live Preview](https://www.youtube.com/watch?v=SDZ8tR01yXw). Content managers can click on a specific content block in the Live Preview window to quickly traverse to the corresponding field.

> Note: This repo doesn't include Live Preview functionality. It's provided solely as a reference for using Live Edit. Without Live Preview, Live Edit might not fully make sense. When you are creating a new page, there won't be any published content, and on already published pages, any new blocks or content changes won't be reflected in the preview. For a seamless experience, we recommend using Live Edit alongside Live Preview.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

1. Install the node packages
2. Create a Contentstack Stack with a `page` content type and two text fields fields: `headline` and `description`
3. Add the Environment variables
4. Configure the [Live Preview](https://www.contentstack.com/docs/developers/set-up-live-preview) in Contentstack.