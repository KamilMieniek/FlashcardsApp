/*TODO: 
-end points
-pobieranie deckow
-edytowanie deckow
-zapisywnaie deckow
-usuwanie deckow
-database tables
*/

const express = require("express");
const app = express();
var cors = require("cors");
const { port } = require("./config");
const fc = require("./controllers/api/CardController");
require("./db/mongoose");

// ! server

//Middleware
app.use(express.json());
app.use(cors());

//Routes
const control = require("./controllers/api/UserController.js");
const DeckControls = require("./controllers/api/DeckController.js");

app.get("/users", control.find);
// app.get("/users/create", UserControls.create);
// app.get("/users/:username", UserControls.find);
// app.get("/users/:username/decks", UserControls.getAllDecks);

// app.get("/decks", DeckControls);