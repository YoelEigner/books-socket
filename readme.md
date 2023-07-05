# Library Socket Server

## Overview
This is a Node.js application that provides an API for the [Library website](https://github.com/YoelEigner/books) spesificly to send notifications the user. It uses Express.js as the web server and Socket.io

## Setup
Before you begin, ensure you have Node.js installed on your machine. If you don't have Node.js installed, you can download it from [Node.js official website](https://nodejs.org/).

1. Clone this repository to your local machine using 
```bash
git clone https://github.com/YoelEigner/books-socket.git
```
2. Navigate into the cloned repository using 
```bash
cd books-socket
```
3. Install the project dependencies using
```bash
npm install
```

## Running the Application
To start the server, use the command below from the root directory of the project
```bash
npm start
```

## API Endpoints

#### The task API provides the following sockets:
### `notification`
Listening to this endpoint well give you the the library's notifications.