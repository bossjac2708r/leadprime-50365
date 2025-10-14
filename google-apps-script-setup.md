# Google Sheets Integration Setup Guide

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "LeadPrime Solar Leads"
4. Set up the following column headers in row 1:
   - A1: **Name**
   - B1: **Email** 
   - C1: **Company**
   - D1: **Phone**
   - E1: **Message**
   - F1: **Source**
   - G1: **Timestamp**
   - H1: **Status**

5. Copy your sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the script below
4. Save the project with name "LeadPrime Form Handler"

## Step 3: Deploy the Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as type
3. Set execute as: "Me"
4. Set access: "Anyone"
5. Click "Deploy"
6. Copy the deployment URL
7. Update the URL in your LeadCaptureForm.tsx file (line 49)

## Step 4: Test the Integration

1. Fill out your form on the website
2. Check if data appears in your Google Sheet
3. Verify all fields are populated correctly

## Troubleshooting

- If you get CORS errors, make sure the script is deployed as a web app with "Anyone" access
- If data isn't appearing, check the Apps Script execution log
- Make sure your sheet ID is correct in both the form and script