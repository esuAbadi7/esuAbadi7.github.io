// Excercise one
String.prototype.filter=function(word){
    return this.replaceAll(word,"");
}
console.log("This word is not nice!".filter('not'));

// Excercise two
Array.prototype.bubblesort=function(){

    for(let j =0;j<this.length;j++){
        if(this[j] > this[j+1]){
            let min= this[j];
            this[j] = this[j+1];
            this[j+1] = min;
            

    }
}
    return this;
}
console.log([9,2,7,6,5].bubblesort());

//Excercise Three A

function person(name){
 
    this.name = name;
}
function Teacher(name,subject){
 person.call(this,name);
 this.subject = subject;
}

Teacher.prototype.teach = function(){
 return this.name + " " +"is now teaching "+this.subject;
}

const teacher = new Teacher("Akon","maths");
console.log(teacher.teach());

// Excerise Three B

function Person(name){
    this.name = name;
}
function Teacher(name,subject){
    personalbar.call(this,name);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(){
    console.log(this.name + " is now teaching" + this.subject);
}
const eyob= new Teacher("Eyob","Maths");
eyob.teach();

//Excercise 4 

function Person(name,age){
    this.name = name;
    this.age = age;
}
function student(name,age,major){
      Person.call(this,name,age);
      this.major = major;
}
function professor(name,age,department){
    Person.call(this,name,age);
    this.department = department;
}
Person.prototype = Object.create(Person.prototype);
Person.prototype.greeting = function(){
    console.log("Greetings, my name is " + this.name+" and I am " +this.age+" years old.");
}
Person.prototype.salute = function(){
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}
student.prototype = Object.create(Person.prototype);
student.prototype.greeting=function(){
    console.log("Hey, my name is " +this.name+" and i am studying " + this.major);
}
professor.prototype = Object.create(Person.prototype);
professor.prototype.greeting=function(){
    console.log("Good day, my name is " +this.name+" and i am in the " + this.department);
}
const person = new Person("Loly",44);
person.greeting();
person.salute();
 
const stu = new student("daniel",22,"biology" );
stu.greeting();
stu.salute();

const pro = new student("thomas",55,"Physics" );
pro.greeting();
pro.salute();






