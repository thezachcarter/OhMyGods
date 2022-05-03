# OhMyGods

## Description

_Duration: 2 Week Sprint_

OhMyGods is my Prime Digital Academy solo project. For this project I wanted to combine my deep interests in turn-based strategy games and ancient cultures to create an entertaining way to learn a bit about a variety of mythologies. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

<img src="./public/images/screenshots/Screen Shot 2022-05-02 at 2.56.42 PM.png" alt="user page" width="250"/>
<img src="./public/images/screenshots/Screen Shot 2022-05-02 at 2.57.00 PM.png" alt="battle page" width="250"/>
<img src="./public/images/screenshots/Screen Shot 2022-05-02 at 2.59.18 PM.png" alt="battle page" width="250"/>

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

1. Create a database named `omg`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Log in or register a new account
2. Navigate to the user page and click 'How To Play'
3. After familiarizing yourself with the rules of the game, click the 'Battle' button
4. Kill some Monsters!
5. Power up and/or replace your Gods to keep the fight going.
6. Click on the '?' button on any of your Gods or any Monsters you have conquered (found in the 'Monsters' view)
  to learn more about their mythical origins.
7. Leave the game at any time and come back later, without losing any of your progress.
8. If at any point you're defeated or feel stuck, click 'Restart' to set your account back to square one.


## Built With

- React
- Redux
- Redux-Saga
- SASS
- Node
- Express
- Wiki Action API
- Passport
- Postgres

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at [thezachcarter@gmail.com]