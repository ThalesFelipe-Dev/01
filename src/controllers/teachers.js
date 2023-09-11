let {teachers, createIdTeacher} = require('../database');

const teachersList = (req, res)=>{
    return res.json(teachers);
};

const getTeachers = (req, res) =>{
    const {id} = req.params;

    const teacher = teachers.find((teacher)=>{
        return teacher.id === Number(id);
    });

    if(!teacher){
        return res.status(404).json({ message:'Not Found'})
    };

    return res.status(200).json(teacher);
};

const postTeacher = (req, res) =>{
    const{name, email, status}= req.body;

    if(!name){
        return res.status(400).json({message:'Name not declared'})
    };

    if(!email){
        return res.status(400).json({message:'Email not declared'})
    };

    const idTeacher = {
        id: createIdTeacher++,
        name,
        email,
        status: status || true
    };

    teachers.push(idTeacher);

    return res.status(201).json(idTeacher); // 201 created

};


const putTeacher = (req, res) =>{
    const { id} = req.params;
    const {name, email, status} = req.body;

    

    if(!name){
        return res.status(400).json({message:'Name is not defined'})
    };

    if(!email){
        return res.status(400).json({message:'Email is not defined'})
    };

    if(!status){
        return res.status(400).json({message:'Status is not defined'})
    };

    const teacher = teachers.find((teacher)=>{
        return teacher.id === Number(id);
    });

    if(!teacher){
        return res.status(404).json({ message:'Not Found'})
    };

    teacher.name = name;
    teacher.email = email;
    teacher.status = status;

    return res.status(203).send();
};

const patchTeacher = (req, res) =>{
    const {id} = req.params;
    const { status} = req.body;
    
    
    const teacher = teachers.find((teacher)=>{
        return teacher.id === Number(id);
    });
    
    if(!teacher){
        return res.status(404).json({ message:'Not Found'})
    };
    
    teacher.status = status;
    
    return res.status(203).send();

};

const deleteTeacher = (req, res) =>{
    const {id} = req.params;

    const teacher = teachers.find((teacher)=>{
        return teacher.id === Number(id);
    });
    
    if(!teacher){
        return res.status(404).json({ message:'Not Found'})
    };

    teachers = teachers.filter((teacher)=>{
        return teacher.id !== Number(id);
    });

    return res.status(204).send();

};

module.exports={
    teachersList,
    getTeachers,
    postTeacher,
    putTeacher,
    patchTeacher,
    deleteTeacher
};
