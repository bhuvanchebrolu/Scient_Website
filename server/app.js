const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const cron = require("node-cron");
const path = require("path");
const createSlotsForWeek = require("./utils/createSlots");
const errorHandler = require("./middleware/errorHandler");
const { resetCredits, resetBookings } = require("./controllers/clubController");

// Load environment variables
dotenv.config();

const app = express();

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/clubs", require("./routes/clubRoutes"));
app.use("/api/clubs", require("./routes/projectRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/inventiveForm", require("./inventive/inventiveFormRoutes")); // Add the new route
app.use("/api/contriveForm",require("./contrive/contriveFormRoutes"))
app.use("/api/inventory", require("./routes/inventoryRoutes"));
app.use("/api/temp", require("./temporary/temp-route"));


// Error handler middleware
app.use(errorHandler);

// Schedule cron jobs
cron.schedule("59 23 * * 0", async () => {
  console.log("Creating slots for the upcoming week...");
  try {
    await createSlotsForWeek();
    console.log("Slots for the week created successfully.");
  } catch (err) {
    console.error("Error creating slots:", err);
  }
});

cron.schedule("59 23 * * 6", async () => {
  console.log("Deleting all existing Bookings...");
  try {
    await resetBookings();
    console.log("Deleted all Bookings");
  } catch (err) {
    console.error("Error deleting Bookings:", err);
  }
});

cron.schedule("59 23 * * 6", async () => {
  console.log("Resetting credits for all clubs...");
  try {
    await resetCredits();
    console.log("Credits reset successfully.");
  } catch (err) {
    console.error("Error resetting credits:", err);
  }
});

// Connect to DB, then seed slots and start server
connectDB().then(async () => {
  try {
    console.log("MongoDB connected");

    // Create slots after DB connection
    await createSlotsForWeek();
    console.log("Slots for the week created successfully on startup.");

    const PORT = process.env.PORT || 6000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Error during server startup:", err);
    process.exit(1);
  }
}).catch(err => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
});