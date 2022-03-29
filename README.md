# TaxCodeService

TaxCodeService is a simple express server that expose two endpoint:

GET http://localhost:8080/tax-code/:code <br>
POST http://localhost:8080/tax-code <br>

With these two endpoint it converts tax code to property and vice-versa.

In GET endpoint code params like 'RSSMRC67C27F205Z' is required and it returns properties decode from code.

In POST endpoint body like this is required:

```json
{
  "surname": "ROSSI",
  "name": "MARCO",
  "birthPlace": "MILANO",
  "birthDate": "27-03-67",
  "gender": "M"
}
```

You just need to clone it, install dependencies with `npm i` command and start server with `npm run compile-and-start`.

Installation Required:
- NodeJS (version 17.8.0)
- NPM

1) "git clone https://github.com/stefanoauciello/taxCodeService.git"
2) "npm i" in cloned folder to install dependencies
5) "npm run compile-and-start" in cloned folder to build and start application

In "postman-collection" folder you may find the collection of API-REST calls that you may use with the backend.

Launch `npm run test` to run unit test.