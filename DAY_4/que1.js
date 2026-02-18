const calculateTax = (income) => {
  if (income > 10000000) {
    var tax = income * 0.30;
     console.log("Tax Amount:", tax);
  } else if (income > 5000000) {
    var tax = income * 0.20;
     console.log("Tax Amount:", tax);
 
  } else {
    var tax = income * 0.10;
     console.log("Tax Amount:", tax);
  
  }
};

calculateTax(15000000);
calculateTax(700000);
calculateTax(30000);
