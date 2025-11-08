const express = require("express");
const { google } = require("googleapis");
const router = express.Router();
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();

const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, "credentials.json"))
);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Your Google Sheet ID
const SPREADSHEET_ID = "14s9xsLdvrAnXK2m5HyJMZgOoTIK6r_E9DwzP11lvEVk";

router.post("/submit", async (req, res) => {
  try {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    const {
      roll,
      branch,
      year,
      name,
      hostelName,
      roomNo,
      email,
      mobile,
      source,
      otherSource,
      teamSize,
    } = req.body;

    // Validate required fields
    if (
      !roll ||
      !branch ||
      !year ||
      !name ||
      !hostelName ||
      !roomNo ||
      !email ||
      !mobile ||
      !teamSize
    ) {
      return res.status(400).send("All fields are required");
    }

    if (!source) {
      return res.status(400).send("Source is required");
    }

    if (source === "Other" && !otherSource) {
      return res.status(400).send("Please specify other source");
    }

    const finalSource = source === "Other" ? otherSource : source;

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:J", // 10 columns
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            roll,
            branch,
            year,
            name,
            hostelName,
            roomNo,
            email,
            mobile,
            finalSource,
            teamSize,
          ],
        ],
      },
    });

    res.status(200).send("Success! Data added to sheet.");
  } catch (error) {
    console.error("Error adding to sheet:", error);
    res.status(500).send(`Error adding to sheet: ${error.message}`);
  }
});

module.exports = router;
