🌐 URL Shortener Service
This project is a URL shortening service, allowing users to input a long URL and generate a unique short URL. The short URL redirects users back to the original URL when accessed. It is built using NestJS with Sequelize ORM and PostgreSQL for storage.

🚀 Features
Shorten Long URLs: Generates unique, short URLs (6 characters).
Redirect to Original URL: The short URL redirects to the original long URL.
Unique Short URLs: Ensures no conflict between generated short URLs.
Validation: Verifies if the input URLs are valid.
Error Handling: Handles invalid URLs and errors like exceeding short URL length.

🛠️ Technologies Used
NestJS: Framework for building efficient, reliable, and scalable server-side applications.
Sequelize: ORM for working with databases in a structured way.
PostgreSQL: Database for storing the URL mappings.
Jest: Testing framework for unit tests.

🚧 Installation
1. Clone the repository:
git clone https://github.com/your-username/Url_shortener_service.git
cd Url_shortener_service

2. Install the dependencies:
npm install

5. Start the development server:
npm run start:dev


🌐 API Endpoints
1. Shorten URL
POST /api/v1/shorten
Body:

{
  "url":"https://www.google.com"
}

Response:

{
    "issuccess": true,
    "statusCode": 200,
    "payload": "http://localhost:5001/api/v1/syuuUZ",
    "message": "The request has succeeded"
}

2. Redirect to Original URL
GET /api/v1/:shortUrl
Example: /api/v1/syuuUZ
Response: Redirects the user to the original URL.

🧪 Running Unit Tests
To run the tests for the service:

npm run test

