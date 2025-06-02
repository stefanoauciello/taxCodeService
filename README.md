# TaxCodeService

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-17.8.0-green.svg)
![Express](https://img.shields.io/badge/Express-4.x-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)

## 📋 Overview

TaxCodeService is a robust Express server application that provides functionality for working with Italian tax codes (Codice Fiscale). It offers two main endpoints that allow conversion between tax codes and personal information, making it useful for identity verification and data processing applications.

## ✨ Features

- Convert personal information to a valid Italian tax code
- Decode a tax code to extract personal information
- RESTful API with JSON responses
- Comprehensive error handling
- Unit tested for reliability

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 17.8.0 or later)
- **NPM** (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/stefanoauciello/taxCodeService.git
   ```

2. Navigate to the project directory:
   ```bash
   cd taxCodeService
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build and start the application:
   ```bash
   npm run compile-and-start
   ```

The server will start running at `http://localhost:8080`.

## 📚 API Documentation

### Endpoints

#### 1. Decode Tax Code

Converts a tax code into personal information.

- **URL**: `/tax-code/:code`
- **Method**: `GET`
- **URL Params**: `code=[string]` (e.g., 'RSSMRC67C27F205Z')
- **Success Response**:
  - **Code**: 200
  - **Content**: JSON object with decoded personal information

Example:
```
GET http://localhost:8080/tax-code/RSSMRC67C27F205Z
```

#### 2. Generate Tax Code

Generates a tax code from personal information.

- **URL**: `/tax-code`
- **Method**: `POST`
- **Data Params**:
  ```json
  {
    "surname": "ROSSI",
    "name": "MARCO",
    "birthPlace": "MILANO",
    "birthDate": "27-03-67",
    "gender": "M"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**: JSON object with the generated tax code

Example:
```
POST http://localhost:8080/tax-code
```

## 🧪 Testing

Run the test suite with:

```bash
npm run test
```

## 🔧 Development Tools

### Postman Collection

A Postman collection is included in the `postman-collection` folder to help you test the API endpoints. Import the `ExampleCollection.postman_collection.json` file into Postman to get started quickly.

## 📁 Project Structure

```
taxCodeService/
├── src/
│   ├── Controllers/      # Request handlers
│   ├── Errors/           # Custom error definitions
│   ├── Helpers/          # Utility functions for tax code processing
│   ├── Models/           # Data models
│   ├── Services/         # Business logic
│   ├── Utils/            # General utilities
│   └── index.ts          # Application entry point
├── test/                 # Test files
├── cities.json           # Database of Italian cities
└── README.md             # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- Express.js team for the excellent web framework
- All contributors who have helped improve this project
