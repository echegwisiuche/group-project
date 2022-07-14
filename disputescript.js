const form= document.getElementById('fm')
const msg= document.getElementById('submitmessage')
const submit= document.getElementById('submit')
const accountnum= document.getElementById('accname')
const tracker = document.getElementById('tracker')
const sbon = document.getElementById('sbon')
const sbone = document.getElementById('guessField')
const carddetails =document.getElementById ('hidecarddetails')
const pos = document.getElementById ('pos')
const vervemaster =document.getElementById ('vervemaster')
const onebank =document.getElementById ('onebank')
const sterlingpro =document.getElementById ('sterlingpro')
const ussd =document.getElementById ('ussd')
//const sboneinp = document.getElementById('trackreq')
//const trc = document.getElementById('trc')


//Function changing all Location input to capital Letter

function forceInputUppercase(e)
{
  var start = e.target.selectionStart;
  var end = e.target.selectionEnd;
  e.target.value = e.target.value.toUpperCase();
  e.target.setSelectionRange(start, end);
}
document.getElementById("location").addEventListener("keyup", forceInputUppercase, false);


// Submit Message
function message(){
    msg.innerHTML= 'Your Dispute complaint has been log successfully. <br>Dispute ID: <b>SB12345</b> click <a href="disputetrack0.html"> here</a> to track your complain.';
    event.preventDefault();
}
  submit.addEventListener('click', message)
  

// Fetch Account Name
function name() {
    var cusname = document.getElementById('accname').value;
    const customerName = cusdetails.find( ({ ACCOUNT_NUMBERS}) => ACCOUNT_NUMBERS ===cusname);
     document.getElementById('accountname').innerHTML=customerName.ACCOUNT_NAME;
  }
  accname.addEventListener ('input',name)

//function sbtrac() {
    //var trackname = document.getElementById('guessField').value;
    //const trackdet = cusdetails.find( ({ TRACKING_ID}) => TRACKING_ID ===trackname);
    // document.getElementById('sboneinp').innerHTML= trackdet.ACCOUNT_NAME;
  //}
  //trc.addEventListener ('click',sbtrac)

  //function for hidden card detail (Testing)

  function carddetail() {
    carddetails.style.display= "block"
   }
  pos.addEventListener('input',carddetail)
  vervemaster.addEventListener('input' ,carddetail)


  function carddet() {
    carddetails.style.display= "none"
   }
  onebank.addEventListener('input',carddet)
  sterlingpro.addEventListener('input',carddet)
  ussd.addEventListener('input',carddet)
  




// Customer Details converted with json
let cusdetails = 
[
     {
      "ACCOUNT_NAME": "AKOREDE YEKEEN",
      "ACCOUNT_NUMBERS": "0080716797",
      "TRACKING_ID": "SB12345"
     },
     {
      "ACCOUNT_NAME": "ADEBOLA ODUBIYI",
      "ACCOUNT_NUMBERS": "0501234567"
     },
     {
      "ACCOUNT_NAME": "RAPHEL ADEBANJO",
      "ACCOUNT_NUMBERS": "0084502354"
     },
     {
      "ACCOUNT_NAME": "AMINAT BALOGUN",
      "ACCOUNT_NUMBERS": "0084104648"
     },
     {
      "ACCOUNT_NAME": "ADESUWA AIHANUWA",
      "ACCOUNT_NUMBERS": "0084167641"
     },
     {
      "ACCOUNT_NAME": "AKOREDE IRENITEMI",
      "ACCOUNT_NUMBERS": "0084169463"
     },
     {
      "ACCOUNT_NAME": "YEWANDE ADELABU",
      "ACCOUNT_NUMBERS": "0084584828"
     },
     {
      "ACCOUNT_NAME": "CHIMEZIE OGBEIDE",
      "ACCOUNT_NUMBERS": "0084085318"
     },
     {
      "ACCOUNT_NAME": "MORENIKE TAYLOR-COLE",
      "ACCOUNT_NUMBERS": "0122851606"
     },
]

// const numInput = document.getElementById('accname')

//const maxInput = (e) =>{
  //if (e.value.length >= 11) {
    // e.preventDefault
    //e.value = e.value.slice(1, 11)
    //return false
  //}
//}



