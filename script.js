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
}

class LearningPaths{
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses
    }
}


const webDevelopmentJS = new LearningPaths({
    name: 'Web Development with JS',
    courses: ['Poo basic', 'Pii Int', 'Arrays', 'V8', 'Async', 'Api rest']
})

const webDevelopmentCSS = new LearningPaths({
    name: 'Web Development with CSS',
    courses: ['Flexbox', 'Grid', 'CSS Animations', 'CSS Transitions', 'Tailwind css',]
})

const nicolas = new Student({
    name: 'Nicolás',
    email:'Nicolas@mail.com',
    username: 'SrPizza',
    github: 'Xnicolas',
    learningPaths: [webDevelopmentJS,webDevelopmentCSS]
})

console.log(nicolas);