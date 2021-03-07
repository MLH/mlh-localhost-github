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

### [GitHub Actions](https://github.com/features/actions)
GitHub actions allows us to run a [NodeJS script](#nodejs) automatically when a commit is pushed to the project. That script takes all the locations provided and turns them into latitude & longitude coordinates.

### [GitHub Pages](https://pages.github.com/)
GitHub pages lets us host our map on GitHub as a webpage.

### [NodeJS](https://nodejs.org)

We chose to use NodeJS as the language to turn all the hometown names into coordinates. 

#### [dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

#### [node-geocoder](https://www.npmjs.com/package/node-geocoder)

Node library for geocoding and reverse geocoding.

## Try the application locally, if you want!

### Google Maps API Key

To use the Google Maps JavaScript API, you will ned an API Key. The [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) is used to track API requests associated with your project for usage and billing. To learn more about API keys, see the API Key Best Practices and the FAQs.

## Adding a new location

The App reads its locations from the `locations.txt` file located in the root folder. It will consider each line a different location, so the file should look something like this:

```txt
New York, USA
Brazil
Japan
```
--India

To add a new location, simply append a new line to the locations.txt file

## Running the application:

To run this application locally, you'll need to:

- Clone this repository:

```
git clone https://github.com/MLH/mlh-localhost-github.git
cd localhost-github
npm install
```

- Set up environment variables:

There is a `.env.example` file that can be used to configure the app. Simply create a copy named `.env`

```txt
GOOGLE_API_KEY= # Google Maps API KEY
```

Now inside the root folder run the following:

```
npm geocode
```

This will turn each line in the `locations.txt` into a set of coordinates.

You can see your own map by running:

```
npm start
```
