const track= document.getElementById('guessField')

// Fetch Tracking ID
function sb () {
    var trackid = document.getElementById('field-input').value;
    const customerID = trackdetails.find( ({ TRACKING_ID}) => TRACKING_ID ===trackid);
    document.getElementById('trackreq').innerHTML=customerID.STAGE_1;
  }
  form.addEventListener ('input', sb)
  console.log(customerID)








// Customer Details converted with json
let trackdetails = 
[
     {
      "TRACKING_ID": "SB12345",
      "DATE": "1 June 2022",
      "STAGE_1": "REQUEST SUBMITTED",
      "STAGE 2": "CEMP REVIEW",
      "STAGE 3": "FT PROCESSING",
      "STAGE 4": "REVERSAL COMPLETED"
     },
     {
      "TRACKING_ID": "SB67890",
      "DATE": "5 June 2022",
      "STAGE 1": "REQUEST SUBMITTED",
      "STAGE 2": "CEMP REVIEW",
      "STAGE 3": "FT PROCESSING",
      "STAGE 4": "REVERSAL COMPLETED"
     },
     {
      "TRACKING_ID": "SB67890",
      "DATE": "5 June 2022",
      "LOG": "TRUE",
      "CEMP_REVIEW": "TRUE",
      "FT_REVIEW": "TRUE",
      "REVERSAL": "FALSE"
     },
     {
      "TRACKING_ID": "SB010001",
      "DATE": "3 June 2022",
      "STAGE 1": "REQUEST SUBMITTED",
      "STAGE 2": "CEMP REVIEW",
      "STAGE 2": "AWAITING RESPONSE FROM EXTRA SWITCH",
      "STAGE 3": "FT PROCESSING",
      "STAGE 4": "REVERSAL COMPLETED"
     },
     {
      "TRACKING_ID": "SB12111",
      "DATE": "4 June 2022",
      "STAGE 1": "REQUEST SUBMITTED",
      "STAGE 2": "CEMP REVIEW",
      "STAGE 3": "FT PROCESSING",
      "STAGE 4": "REVERSAL COMPLETED"
     },
    
]