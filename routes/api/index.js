const path = require("path");
const router = require("express").Router();
const eventRoutes = require("./Events");


// Book routes
router.use("/events", eventRoutes);

// Google Routes


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;