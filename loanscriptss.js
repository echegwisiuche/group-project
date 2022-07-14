//DSCR function

// let printrepayment = document.getElementById ('repayment');
let amount = document.getElementById("amount").value;
let tenor = document.getElementById("tenor").value;
let existing = document.getElementById("existing_obligation").value;
let salary = document.getElementById("salary").value;
let emptymessage = document.getElementById("empty");
let emptyymessage = document.getElementById("emptyy");
let submitt = document.getElementById("cli");
let rep = document.getElementById("repayment");
let annual = document.getElementById("repayments");
let DSCR = document.getElementById("DSCR");
var customer_bvn = document.getElementById("BVN").value;
let prin = document.getElementById("printname");
let obligation = 0;
let loan = 0;
let totalPercentage = document.getElementById("total_p");
let frm = document.getElementById("frm");
let frm2 = document.getElementById("frm2");
let check = document.querySelector("#check svg");
let close = document.querySelector("#close svg");
let comm = document.getElementById("comm");
let secondcomment = document.getElementById("second-comment");
let advice = document.getElementById("advice");
let modee = document.getElementById("modee");
let tenorr = document.getElementById("tenorr");
let bi = document.getElementById("bi");
let monthly = document.getElementById("monthly");
let proceed = document.getElementById("click");
let shop = document.getElementById("shop");
// INPUT BVN LISTED IN JSON DATA BELOW
//
function displayEmployee() {
  var customer_bvn = document.getElementById("BVN").value;
  console.log(customer_bvn);
  const employeeData = employee.find(({ BVN }) => BVN === customer_bvn);

  console.log(employeeData);

  document.getElementById("printname").innerHTML =
    "WELCOME," + " " + employeeData.NAME;

  obligation = employeeData.EXIS.toFixed(2);
  loan = employeeData.SAL.toFixed(2);

  event.preventDefault();
}
frm.addEventListener("input", displayEmployee);

//Displays appropriate tenor
function selectvalue() {
  if (modee.value == "bi") {
    document.getElementById("tenor").style.display = "none";
  } else {
    document.getElementById("tenor").style.display = "block";
  }

  if (modee.value == "monthly") {
    document.getElementById("tenorr").style.display = "none";
  } else {
    document.getElementById("tenorr").style.display = "block";
  }

  if (modee.value == "bi") {
    document.getElementById("cli").style.display = "none";
  } else {
    document.getElementById("cli").style.display = "block";
  }

  if (modee.value == "monthly") {
    document.getElementById("click").style.display = "none";
  } else {
    document.getElementById("click").style.display = "block";
  }
}

modee.addEventListener("change", selectvalue);

// FETCHES SALARY AND EXISTING LOAN FROM JSON DATA
function dispEmployee() {
  if (modee.value == "monthly") {
    var customer_bvn = document.getElementById("BVN").value;
    console.log(customer_bvn);
    var employeeData = employee.find(({ BVN }) => BVN === customer_bvn);

    console.log(employeeData);
    document.getElementById("salary").value = "N" + employeeData.SAL.toFixed(2);

    document.getElementById("existing_obligation").value =
      "N" + employeeData.EXIS.toFixed(2);
    let repay =
      (1.14 * document.getElementById("amount").value) /
      document.getElementById("tenor").value;
    rep.textContent = "N" + repay.toFixed(2);

    let total = Number(repay) + Number(obligation);
    let re = (total / Number(loan)) * 100;
    red = re.toFixed(2) + "%";
    let dv = (DSCR.textContent = red);
    // advice
    let stepone = 0.666 * employeeData.SAL.toFixed(2);
    let steptwo = stepone - employeeData.EXIS.toFixed(2);
    let facilityamount =
      (steptwo * document.getElementById("tenor").value) / 1.14;
    advices = facilityamount.toFixed(2);

    if (frm2.classList.contains("display-none")) {
      frm2.classList.remove("display-none");
      frm.classList.add("display-none");
    }

    //   display check and congratulations
    //   alert(dv.replaceAll("%", ));
    if (re <= 66.61) {
      check.style.display = "block";
      comm.textContent =
        "Congratulations" +
        " " +
        employeeData.NAME + "," + " " +
        "you are eligible for the requested amount";


    shop.style.display = "block"
    } else {
      close.style.display = "block";
      secondcomment.textContent = "Dear" + " " + employeeData.NAME + "," + " " +
      "you are not eligible for the requested amount. Your maximum limit is" +
        " " + 
        "N" +
        Number(advices) +
        " " +
      "for a tenor of 12 months"
    }

    event.preventDefault();
  }
}

submitt.addEventListener("click", dispEmployee);

//function displayupfront() {
     


//}

//proceed.addEventListener("submit", displayupfront);
//function displayupfront() {
//  if (modee.value == "bi") {
//  var customers_bvn = document.getElementById("BVN").value;

//const employeesData = employee.find(({ BVN }) => BVN === customer_bvn);
//document.getElementById("salary").value = "N" + employeeData.SAL.toFixed(2);

//    document.getElementById("existing_obligation").value =
//    "N" + employeeData.EXIS.toFixed(2);
//let repays =
//(1.28 * document.getElementById("amount").value) /
//      document.getElementById("tenor").value /
//    6;
//rep.textContent = "N" + repays.toFixed(2);
//  }
//}

//submitt.addEventListener("click", displayupfront);//

//refresh function
//const reset= () =>
//{
// alert ('Hello');

//   display check and congratulations
//   alert(dv.replaceAll("%", ));

let employee = [
  {
    SERIAL_NUMBER: 1,
    NUBAN: "0500223465",
    NAME: "ABC LTD",
    SAL: 100000,
    EXIS: 10000,
    FACILITY_TYPE: "Morabaha",
    BVN: "22113344556",
  },

  {
    SERIAL_NUMBER: 18,
    NUBAN: "0503003940",
    NAME: "AKOREDE INVESTMENT",
    SAL: 585000.0,
    EXIS: 50000.0,
    FACILITY_TYPE: "Morabaha",
    BVN: "22444444444",
  },
  {
    SERIAL_NUMBER: 19,
    NUBAN: "0505506054",
    NAME: "ADEBOLA ODUBIYI ",
    SAL: 187347.63,
    EXIS: 35000.0,
    FACILITY_TYPE: "Morabaha",
    BVN: "22777788889",
  },
];
