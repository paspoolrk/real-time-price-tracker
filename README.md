# real-time-price-tracker
Real time price tracker which dynamically fetches the crypto currencies related data and adds them to Database and fetches latest 20 updates dynamically 

## Features
- Polls real-time data every few seconds for 5 cryptocurrencies.
- Stores data in a MongoDB database.
- Displays the most recent 20 entries for a selected cryptocurrency in a dynamic table.

## Tech Stack
- Backend: Express, MongoDB, TypeScript
- Frontend: Next.js, Redux, TypeScript

## Installation and Running the Project
1.Ensure you replace placeholders like API_URL_FOR_${symbol} with actual API endpoints from a provider like LiveCoinWatch or CoinGecko.

### Backend
1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd real-time-price-tracker

3.install dependencies
npm install

4.start the server
npm run dev


### Frontend

1.Navigate to the frontend directory
cd frontend

2.install dependencies
cd frontend

3.start the server
npm run dev

The application should now be running on `http://localhost:3000`.
