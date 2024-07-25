LocalNet

Welcome to the Garden Finance Localnet Assignment repository! This project showcases the integration of the Garden Finance SDK for performing BTC to WBTC swaps on the localnet.

## Overview

This repository contains a sample application demonstrating the use of the Garden Finance SDK for BTC to WBTC swaps on a localnet environment. This setup is ideal for developers looking to test and develop applications in a controlled local environment.

## Features

- **Localnet Integration:** The application is configured to work with a localnet environment, suitable for development and testing.
- **Swap Functionality:** Users can perform BTC to WBTC swaps through a simple web interface.
- **Localnet Setup Script:** Includes a script for setting up the localnet environment.

## Installation

To get started with the localnet application, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/garden-finance-localnet.git
   cd garden-finance-localnet
Install Dependencies:

bash
Copy code
npm install
Set Up Localnet:

bash
Copy code
node scripts/setup-localnet.js
Usage
Running the Localnet Server
Start the Server:

bash
Copy code
node server.js
Access the Application:
Open your browser and navigate to http://localhost:3001 to interact with the Dapp on the localnet.

Swap Functionality
Perform a Swap:
Click the "Perform Swap" button on the web interface.
Enter the amount of BTC to swap to WBTC.
View the result of the swap operation.
Project Structure
server.js: Contains the server setup and swap functionality using the Garden Finance SDK for the localnet.
src/index.html: The main HTML file providing the structure of the application.
src/styles.css: The CSS file for styling the application.
src/main.js: The JavaScript file handling frontend interactions and swap requests.
scripts/setup-localnet.js: Script to set up the localnet environment if required.
New Features and Enhancements
In this project, we have introduced the following improvements:

Localnet Integration: Provided a complete setup for interacting with a localnet, making it easier for developers to test in a controlled environment.
Enhanced Error Handling: Added better error handling for swap operations to ensure accurate feedback and debugging.
Contributing
We welcome contributions to this project. Please submit issues or pull requests following the project's guidelines. Ensure that all changes are well-tested.


Contact
For any questions or support, please reach out to jan.narayanan27@gmail.com.
