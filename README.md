# MLH Localhost Hometown Map
This repository contains the source code for a map of the hometowns of anyone who attends the MLH Localhost workshop, How to Collaborate on Code Projects with GitHub. Participants learn best practice GitHub workflows, add their hometown to `locations.txt`, and see the giant community they're part of!

## How to participate in this workshop

1. Make a GitHub account.
2. Fork this repository.
3. Add your hometown to `locations.txt`.
4. Commit your changes and make a pull request.
5. Ask someone else to comment on your pull request.
6. Wait for the workshop organizer to approve your pull request.
7. Refresh the map!

## Technologies used in this project

### NodeJS

The map itself is a Node.js application. Node.js allows us to write full-stack

## NPM packages used

### [express](https://www.npmjs.com/package/express)

Fast, unopinionated, minimalist web framework for node. This is the framework with which we built the application.

### [dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### [node-geocoder](https://www.npmjs.com/package/node-geocoder)

Node library for geocoding and reverse geocoding.

### [ejs](https://www.npmjs.com/package/ejs)

Embedded JavaScript templates

## Try the application locally, if you want!

### Google Maps API Key

To use the Google Maps JavaScript API, you will ned an API Key.  The [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) is used to track API requests associated with your project for usage and billing. To learn more about API keys, see the API Key Best Practices and the FAQs.

Read the [tutorial](docs/tutorial.md) and configure your [API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)


## Adding a new location

The App reads its locations from the `locations.txt` file located in the root folder. It will consider each line a different location, so the file should look something like this:

```txt
New York, USA
Brazil
Japan
```

To add a new location, simply append a new line to the locations.txt file

There is also a `locations.txt.example` file that can be used to test the app. Copy its content to locations.txt and restart the app.

## Running the application:

To run this application locally, you'll need to:

* Clone this repository:
```
git clone https://github.com/MLH/mlh-localhost-github.git
cd localhost-github
npm install
```

* Set up environment variables:

There is a `.env.example` file that can be used to configure the app. Simply create a copy named `.env`

```txt
PORT= # Port to be used by the app
API_KEY= # Google Maps API KEY
```

Now inside the root folder run:
```
npm start
```

Now you can access locally in your browser the address  `http://localhost:3000` and see your locations map.
