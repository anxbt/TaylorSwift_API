# Taylor Swift Relationships API

## Overview

The Taylor Swift Relationships API is a Node.js and Express.js API that provides information about people Taylor Swift has dated in a chronological manner. The API includes their names, dates, and images.

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is installed with Node.js

### Installation

1. Clone this repository to your local machine:

```
git clone https://github.com/your_username/TaylorSwiftRelationshipsAPI.git
```

2. Navigate into the project directory:

```
cd TaylorSwiftRelationshipsAPI
```

3. Install the project dependencies:

```
npm install
```

### Configuration

Before running the server, you may need to configure some environment variables. Create a `.env` file in the root directory of the project and add the following:

```
# Example .env file
PORT=3000
```

Replace `3000` with your desired port number.

### Running the Server

To start the Express server, run the following command:

```
npm start
```

The server should now be running locally on the port you specified in the `.env` file.

## API Endpoints

### Get All Relationships

- **URL:** `/relationships`
- **Method:** `GET`
- **Description:** Retrieves all relationships Taylor Swift has been in.
- **Response:**
  - **Status:** 200 OK
  - **Body:** Array of relationship objects containing names, dates, and images.

### Get Relationship by ID

- **URL:** `/relationships/:id`
- **Method:** `GET`
- **Description:** Retrieves a specific relationship by its ID.
- **Parameters:**
  - `id`: The unique identifier of the relationship.
- **Response:**
  - **Status:** 200 OK
  - **Body:** Object containing the details of the relationship.
  - **Status:** 404 Not Found if the relationship with the specified ID does not exist.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
