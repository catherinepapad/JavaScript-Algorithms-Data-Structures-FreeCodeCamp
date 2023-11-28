const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;
  
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };
  this.setFirstName = function(first) {
    firstName = first;
    return firstName;
  };
  this.setLastName = function(last) {
    lastName = last;
    return lastName;
  };
  this.setFullName = function(first, last) {    
    firstName = first;
    lastName = last;
    return this.getFirstName() + " " + this.getLastName();
  };
};