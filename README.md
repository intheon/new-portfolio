# REFACTOR UNDERWAY - IS WIP !!!


# Springboard
My personal dashboard á la iGoogle, but in realtime!

Organise the shit out of your life, in a self hosted fashion.

### V3 Major Refactor

- Uses `nuxtjs` which hides a lot of the boring implementations and is just nicer to work with.
- Move to monorepo & Docker for ease of self hosting.
- Uses MongoDB Compass as a backend (their web based interface is awesome). Self hosting Mongo will come in V4 as an option with Docker Compose.
- Dropping of client-side encryption, as this is intended for hardware you own (might reconsider in future).
- More focus on features.
- Better styling.
- Relies on any S3 compatible hosting for filestorage.

### Installation

1. Clone this repo
2. Create a folder called `keys`.
3. Add the files `jwtSecret.js`, `s3.js`, `mongo.js` to api/keys (there's examples of what you need to add) - Note this is just for a dev environment, for prod you pass in env vars.
   - `JWT_SECRET` - Some secure and random string.
   - `SERVER_ENDPOINT` - Where your API is hosted (default port 1337 on this monorepo).
   - `S3_BUCKET` - S3 Bucket Name
   - `S3_ENDPOINT` - S3 URL Endpoint.
   - `MONGO_DB` - Database Endpoint.
   - `S3_REGION` - e.g eu-central-1, with Min.io, this is set to "default".
   - `S3_KEY` - Api Key
   - `S3_SECRET` - Api Secret.
4. Add in your values for these (you can get your MongoDB string from https://cloud.mongodb.com)
5. `npm install && npm run dev`
6. Open `localhost:3000`

Raise an issue if you have a feature request!

Updates are coming ... soon... when I finish some contract work... promise...
