# Participants' Home Towns

## Tecnologies used in this project

## NodeJS

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. NodeJS was the platform in which we built this application.

## NPM packages used

### [express](https://www.npmjs.com/package/express)

Fast, unopinionated, minimalist web framework for node. This is the framework with which we built the application.

### [dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

### [node-geocoder](https://www.npmjs.com/package/node-geocoder)

Node library for geocoding and reverse geocoding.

### [ejs](https://www.npmjs.com/package/ejs)

Embedded JavaScript templates

## Prerequisites to run this application:

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
git clone https://github.com/MLH/localhost-github.git
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
