/* Lab 6 - Task 2  */
 window.onload = function() {
   $("userid").observe("keyup", myFunction1);
   $("code").observe("keyup", myFunction2);
   $("number").observe("keyup", myFunction3);
}

function myFunction1() {
  var re = /^[A-Z]+[0-9]*/i;
  var testString = $(this).value;

  if (re.test(testString) == true)
  {
    $(this).nextElementSibling.innerHTML = "CORRECT";
  }
  else {
    $(this).nextElementSibling.innerHTML = "INCORRECT";
  }
}

function myFunction2() {
  var codes=['EECS', 'ESSE', 'MATH', 'HIST', 'CHEM', 'BIO'];
  var courseCode = $(this).value;
  courseCode = courseCode.toUpperCase();

  if (codes.includes(courseCode))
  {
    $(this).nextElementSibling.innerHTML = "CORRECT";
  }
  else {
    $(this).nextElementSibling.innerHTML = "INCORRECT";
  }
}

function myFunction3() {
  var re = /^[0-9][0-9][0-9][0-9]$/;
  var testString = $(this).value;

  if (re.test(testString) == true)
  {
    $(this).nextElementSibling.innerHTML = "CORRECT";
  }
  else {
    $(this).nextElementSibling.innerHTML = "INCORRECT";
  }
}
