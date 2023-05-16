// --Objeto literal
const SrPzz = {
    name: 'Nicolás',
    age: 26,
    courses:[
        'videogame js',
        'matematicas',
        'clousures' 
    ],

    aproveCourse(newCourse){
        this.courses.push(newCourse);
    }
}; 

SrPizza.aproveCourse('animaciones');

console.log(SrPizza);

// ---prototipo--

function Student(name, age, aprovedCourses) {
    this.name = name;
    this.age = age;
    this.aprovedCourses = aprovedCourses;
    // this.NewAprovedCourses = (newcourse)=>{
    //     this.aprovedCourses.push(newcourse);
    // }
}

Student.prototype.NewAprovedCourse = function(newCourse){
    this.aprovedCourses.push(newCourse);
}

const SrPizza = new Student('Nicolás', 26, ['matematicas', 'videogame js', 'clousures']);
SrPizza.NewAprovedCourse('animaciones');


console.log(SrPizza);

// -- Prototipos con sintaxis de clases

 class Student2{
    //atributos
    constructor({name, age, aprovedCourses}){
        this.name = name;
        this.age = age;
        this.aprovedCourses = aprovedCourses;
    }
    //metodo
    NewAprovedCourse(newCourse){
        this.aprovedCourses.push(newCourse);
    }
 };

 const Xni = new Student2(
    {name:'Nicolás',
    age:26,
    aprovedCourses:['React: intro', 'Manejo de estados']}
 )
 
Xni.NewAprovedCourse('Render');
 console.log(Xni);