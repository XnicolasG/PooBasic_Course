class Comments{
    constructor({
        content,
        studentName,
        studentRole = 'Estudiante',
    }){
        this.content = content; 
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0
    }
    Publish(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

class Student {
    constructor({
        name,  //si en un objeto se define una propiedad que va a tener el mismo valor ej: name: name, se puede escribir simplemente con name,
        email,
        username,
        twitter = undefined,
        instagram =undefined,
        github = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia ={
            twitter,
            instagram,
            github ,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    NewAprovedCourse(NC){
        this.approvedCourses.push(NC);
    }
}
function videoPlay(ID) {
    const urlSecret = 'http://videoclases.com/' + ID;
    console.log('reproduciendo url '+ urlSecret);   
}
function videoPause(ID) {
    const urlSecret = 'http://videoclases2.com/' + ID;
    console.log('pausando url '+ urlSecret);   
}
 class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }
    play(){
        videoPlay(this.videoID);
    }
    pause(){
        videoPause(this.videoID);
    }
}

class LearningPaths{
    constructor({
        name,
        courses = []
    }){
        this._name = name;
        this.courses = courses
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if (newName === 'curso malo') {
            console.error('aca no aceptamos nombre malardos puto')
        }else{
            this._name = newName;
        }
    } 
}
class Courses{
    constructor({
        name,
        classes =[],
        isFree = false,
        lang = 'Spanish'
    }){
        this._name = name;
        this.clasees = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        if (newName === 'curso malo') {
            console.error('aca no aceptamos nombre malardos puto')
        }else{
            this._name = newName;
        }
    }
}





const Poo_Basic = new Courses({
    name: 'Poo basic',
    classes : ['tipos de objetos', 'prototype', 'abstraccion', 'encapsulamiento'],
    isFree: false,
    lang: 'Spanish'
});
const CursoPracticoHtml = new Courses({
    name: 'Curso practico de HTML',
    classes : ['Etiquetas', 'Syntax', 'Enlaces', 'Jerarquias'],
    isFree: true,
    // lang: 'English'
});
const MatematicasJS = new Courses({
    name: 'Curso de matematicas y estadistica con Javascript',
    classes : ['Promedio', 'media', 'moda', 'predicciones'],
    // isFree: false,
    lang: 'english'
});
const Grid = new Courses({
    name: 'Grid',
    classes: ['introducción', 'templates', 'areas', 'posicionamiento']
})
const webDevelopmentJS = new LearningPaths({
    name: 'Web Development with JS',
    courses: [Poo_Basic]
})

const webDevelopmentCSS = new LearningPaths({
    name: 'Web Development with CSS',
    courses: [Grid]
})
const nicolas = new Student({
    name: 'Nicolás',
    email:'Nicolas@mail.com',
    username: 'SrPizza',
    github: 'Xnicolas',
    learningPaths: [webDevelopmentJS,webDevelopmentCSS]
});
nicolas.NewAprovedCourse('React: intro')
console.log(nicolas);

class mainStudent {
    constructor({
        name,  //si en un objeto se define una propiedad que va a tener el mismo valor ej: name: name, se puede escribir simplemente con name,
        email,
        username,
        twitter = undefined,
        instagram =undefined,
        github = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia ={
            twitter,
            instagram,
            github ,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    NewAprovedCourse(NC){
        this.approvedCourses.push(NC);
    }
    shareComment(text){
        const comment = new Comments({
            content: text,
            studentName: this.name,
        })
        comment.Publish();
    }
}


//sub clase de clase madre
class teacherStudent extends mainStudent{
    constructor(props){
        super(props)
    }
    NewAprovedCourse(newCourse){
        this.approvedCourse.push(newCourse)       
    }  

    //llamado de metodo en el que dentro que crea una instancia de clase Comments
    shareComment(text){
        const comment = new Comments({
            content: text,
            studentName: this.name,
            studentRole: 'Teacher' //se modifica estructura del metodo creado en super clase mainStudent
        })
        comment.Publish();
    }

}



class freeStudent extends mainStudent{
    constructor(props){
        super(props)
    }
    NewAprovedCourse(newCourse){
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
          } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
          }
    }
}

class basicStudent extends mainStudent{
    constructor(props){
        super(props)
    }
    NewAprovedCourse(newCourse){
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
          } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
          }
    }
}
class expertStudent extends mainStudent{
    constructor(props){
        super(props)
    }
    NewAprovedCourse(newCourse){
        this.approvedCourse.push(newCourse)       
    }
}

const admin = new teacherStudent({
    name: 'SrPizza',
    username:'AdminPizza',
    email: 'SrPizza@admin.com',
    github: 'PizzaDev'
})

const juan = new basicStudent({
    name: 'Juan',
    username: 'Juanito',
    github: 'JuanDev',
    email: 'juan@mail.com',
    learningPaths:[webDevelopmentJS]
})

const alfredo = new freeStudent({
    name: 'Juan',
    username: 'Juanito',
    github: 'JuanDev',
    email: 'juan@mail.com',
    learningPaths:[webDevelopmentJS]
})