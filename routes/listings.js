const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require('../controllers/listings.js')
const { validateListing, isLoggedIn, isOwner } = require("../middlewares.js");
const {storage} = require('../configureCloud.js');
const multer  = require('multer');
const upload = multer({ storage });
// const isLoggedIn = require("../middlewares.js");



router.get("/", wrapAsync(listingController.index));

// edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));
router.put("/:id", isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.editListing));

// create route
router.get("/new", isLoggedIn, listingController.renderCreateForm);
// router.post('/', upload.single('listing[image]'), (req, res)=>{
//     res.send(req.file);
// })
router.post("/", isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));

// show route
router.get("/:id", wrapAsync(listingController.show));

// delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroy));

module.exports = router;