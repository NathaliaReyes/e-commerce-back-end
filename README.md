# 🔙🔚 e-commerce-back-end
This is the Challenge-13 related to Object-Relational Mapping (ORM)

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
E-commerce is a project that focuses on the design and implementation of a back-end infrastructure for an e-commerce website. It implements the power of Express.js, a fast, useful, and minimalist web framework for Node.js, to build the API.

The API interacts with a PostgreSQL database using Sequelize, a promise-based Node.js ORM. This project serves as a powerful tool for managing different aspects of an e-commerce site, including products, categories, and tags. It provides endpoints for creating, reading, updating, and deleting (CRUD operations) these entities, making it a comprehensive solution for back-end e-commerce management.

## Database-Appearance

Entity Relationship Diagram:
📍![ERD](/Assets/demos/ERD/ERD_e-commerce.png)

The following walkthrough video demonstrates the appearance and functionality of the command-line application:
[APPEARANCE-APPLICATION](https://drive.google.com/file/d/1EdgyrjSkWPqYjq5zyFyTPVnsosIuaZmw/view?usp=sharing)

## Table of Contents
- [🔙🔚 e-commerce-back-end](#-e-commerce-back-end)
  - [Description](#description)
  - [Database-Appearance](#database-appearance)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
    - [📚Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [❔Questions](#questions)

## Installation

To install this application, you'll need Node.js and npm installed on your computer. Follow these steps:

1. Clone this repository to your local machine using `git clone <https://github.com/NathaliaReyes/e-commerce-back-end.git>` or `git clone <git@github.com:NathaliaReyes/e-commerce-back-end.git>`.
2. Navigate to the cloned repository in your terminal `cd e-commerce-back-end`.
3. Install the necessary npm packages by running `npm install`.
4. Ensure you have a PostgreSQL server running and accessible (change credentials-username, password..).
5. Set up your database by running the provided schema file in your PostgreSQL client `psql -U <username>` and `\i db/schema.sql`.
6. Seed the database, `node seeds/index.js`.
7. Start the application by running `node <server.js>` in your terminal.

Please refer to the `Usage` section for more details on how to use the application.

## Usage

This application provides a back-end for an e-commerce site. You can test the API endpoints using a tool like Postman or Insomnia.

The API has endpoints for three different categories: Products, Categories, and Tags. Each category has endpoints for creating, reading, updating, and deleting data. Go to the Assets file and find the POSTMAN collection file, run the file in the software and follow instructions below:

- **Products**: Use the `/api/products` endpoint to create and read products. You can also use `/api/products/:id` endpoint to read, update, or delete on a specific product.

- **Categories**: Use the `/api/categories` endpoint to create and  read categories. You can also use `/api/categories/:id` endpoint to read, update, or delete on a specific category.

- **Tags**: Use the `/api/tags` endpoint to create and read tags. You can also use `/api/tags/:id` endpoint to read, update, or delete on a specific tag.

Remember to replace `:id` with the actual id of the product, category, or tag you want to operate on.

To start the application, run `node server.js` in your terminal.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

[pgAdmin4](https://www.pgadmin.org/) is an open-source tool for PostgreSQL with a built-in ERD tool.

### 📚Acknowledgements

- **Node.js:** 
- **Sequelize.js:** 
- **PostgreSQL:**

## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [MIT License.](https://opensource.org/licenses/MIT) : Expat License.


## Features

+ **Product Management:** Users can add, view, update, and delete products. This allows for full control over the product inventory.

+ **Category Management:** Users can add, view, update, and delete categories. This allows for easy management of product categories and organization.

+ **Tag Management:** Users can add, view, update, and delete tags. This allows for easy management of product tags and can help in product search and organization.

+ **Association Management:** Users can associate products with categories and tags. This allows for a more detailed classification and searchability of products.

+ **Bulk Operations:** Users can perform bulk operations like adding multiple products or tags at once. This can save time when managing large amounts of data.

+ **Security:** The application uses secure practices for handling data and connections, such as using environment variables for sensitive information.

+ **PostgreSQL Database:** The application uses a PostgreSQL database for data storage, providing robust, reliable, and efficient data management.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

n/a

## ❔Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com
LinkedIn 👩🏻‍💻: [SilviaReyes](https://www.linkedin.com/in/silvia-reyes-2b907123b/)

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



***Thanks for stopping!***
