
var empName={   
    firstName:'shriya',
    lastname:'sharma',
    name:function(){
        var fullname = this.firstName + ' ' + this.lastname;
        return fullname;}
};
var empAge = function(age){
        console.log(this.name() + ' age is ' +age);
};

//using bind- it creates a new function which we can use later as a normal function
var empDet=empAge.bind(empName);
empDet(26);

// using call- it executes the function immediately and does not create a new function which differencites it from bind
fnmain2.call(fn2,24);

//using apply- this is similar to call but it passes the argument as an array
fnmain2.apply(fn2,['24']);
