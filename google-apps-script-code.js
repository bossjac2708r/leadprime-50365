/**
 * LeadPrime Solar - Google Apps Script for Form Submissions
 * This script receives form data and writes it to a Google Sheet
 */

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e);
    console.log('Parameters:', e.parameter);
    
    // Your Google Sheet ID - REPLACE WITH YOUR ACTUAL SHEET ID
    const SHEET_ID = '1L6AahjAUoepCpB7BEzEuJGBrv_RrFnMwfs9rJSefbT4';
    
    // Get the spreadsheet and worksheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Extract form data from the request
    const formData = {
      name: e.parameter.name || '',
      email: e.parameter.email || '',
      company: e.parameter.company || '',
      phone: e.parameter.phone || '',
      message: e.parameter.message || '',
      source: e.parameter.source || 'Website Form',
      timestamp: e.parameter.timestamp || new Date().toISOString(),
      status: 'New Lead'
    };
    
    console.log('Form data to be inserted:', formData);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      throw new Error('Missing required fields');
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Invalid email format');
    }
    
    // Prepare the row data in the same order as your sheet headers
    const rowData = [
      formData.name,
      formData.email,
      formData.company,
      formData.phone,
      formData.message,
      formData.source,
      formData.timestamp,
      formData.status
    ];
    
    // Insert the data into the sheet
    sheet.appendRow(rowData);
    
    // Log success
    console.log('Successfully inserted row:', rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Lead captured successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'LeadPrime Form Handler is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify the script works
 * Run this function in the Apps Script editor to test
 */
function testFormSubmission() {
  const testData = {
    parameter: {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Solar Company',
      phone: '(555) 123-4567',
      message: 'This is a test submission',
      source: 'Test',
      timestamp: new Date().toISOString()
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}