// script.js
const unlockTable = {
  "00": [null, "0661", "0348", "9354", "1220", "3214", "6966", "9011", "4636", "4782", "", "", "", ""],
  "01": ["2393", "8220", "5071", "7914", "4588", "5896", "6610", "0160", "0628", "5967", "", "", "", ""],
  "02": ["5879", "5484", "1885", "4404", "7611", "5139", "5060", "2789", "4027", "0720", "", "", "", ""],
  "03": ["2592", "2794", "5620", "3127", "9837", "5561", "5564", "8666", "4507", "4329", "", "", "", ""],
  "04": ["6941", "3390", "5783", "4077", "2589", "3920", "767", "8902", "8462", "0353", "", "", "", ""],
  "05": ["0592", "6922", "9213", "2339", "5337", "0398", "8792", "2128", "3453", "1604", "", "", "", ""],
  "06": ["9283", "9566", "0039", "4063", "0522", "3150", "2698", "7901", "4356", "5230", "", "", "", ""],
  "07": ["4859", "5667", "4812", "4522", "8588", "9812", "4010", "2459", "8166", "6957", "", "", "", ""],
  "08": ["0780", "7574", "4985", "6021", "1497", "7912", "7464", "6275", "5485", "7109", "", "", "", ""],
  "09": ["8688", "8416", "9881", "2373", "2566", "2462", "1611", "5661", "3321", "9490", "", "", "", ""],
  "10": ["0602", null, null, null, null, null, null, null, null, null, "", "", "", ""]
};

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('codeForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputCode = document.getElementById('inputCode').value;
    const unlockCode = getUnlockCode(inputCode);
    displayResult(unlockCode);
  });
});

function getUnlockCode(code) {
  // Validate the code format
  if (!code || code.length !== 3 || isNaN(code)) {
    return "Invalid code format";
  }

  const firstTwoDigits = code.substring(0, 2);
  const thirdDigit = parseInt(code[2], 10);

  // Lookup the unlock code with error handling
  const possibleCodes = unlockTable[firstTwoDigits]; 
  if (possibleCodes && possibleCodes[thirdDigit]) {
    return possibleCodes[thirdDigit];
  } else {
    return "Code not found";
  }
}

function displayResult(unlockCode) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = unlockCode ? `Unlock Code: ${unlockCode}` : 'Invalid code entered.';
}
