# Store Locator Application

A web-based store locator that allows users to find store locations on an interactive map. This application uses **MapTiler SDK** to render maps and allows store locations to be added dynamically.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Interactive map rendering using **MapTiler SDK**.
- Add and visualize store locations with unique Store IDs.
- Search and display store details on the map.
- Responsive design built using **Bootstrap 5**.
- Backend API to manage store data.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Map SDK**: MapTiler SDK
- **Backend**: Node.js, Express
- **Database**: MongoDB (optional, based on implementation)
- **API**: RESTful API for managing store data

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/)
- [MapTiler API Key](https://www.maptiler.com/)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/store-locator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd store-locator
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your MapTiler API key:
    ```bash
    MAPTILER_API_KEY=your_maptiler_api_key_here
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

### Add a Store
- Navigate to `/add.html` to add a new store by entering the Store ID and Store Address.
- After submission, the store will be plotted on the map with the given Store ID and coordinates.

### View Stores
- Navigate to the main page to see all the stores plotted on the map.
- Store details such as Store ID and coordinates will be displayed when you hover over the map points.

## API Endpoints

### POST `/api/v1/stores`
Add a new store.

**Request Body:**
```json
{
  "storeId": "0001",
  "address": "123 Main St, City, Country"
}
