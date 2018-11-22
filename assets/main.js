function get_age (dob) {
  var diff = new Date () - new Date (dob);
  var age = Math.floor (diff/31536000000);
  return age;
}
