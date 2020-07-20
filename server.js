var express = require('express');
var app = express();
const Joi = require('joi');

app.use(express.json());

const courses=[
  {id:1,name:'courese1'},
  {id:2,name:'subject2'}
];
app.get('/',(req,res)=>{
  res.send('Hello world');
});

app.get('/api/course',(req,res)=>{
  res.send([1,2,3]);
});

app.get('/api/posts/:year/:month',(req,res)=>{
  res.send(req.params);
});

app.get('/api/courses/:id',(req,res)=>{
  const course=courses.find(c=>c.id==parseInt(req.params.id));
  if(!course) res.status(404).send('The course not found');
  res.send(course);
});

app.post('/api/cour',(req,res)=>{

  //const {error} = validateCourse(req.body);

  //if(error){
    //res.status(400).send(error.details[0].message);
    //return;
  //}

  const course={
    id:courses.length+1,
    name:req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{

  const course=courses.find(c=>c.id==parseInt(req.params.id));
  if(!course) res.status(404).send('The course not found');



  //const {error} = validateCourse(req.body);

  //if(error){
    //res.status(400).send(error.details[0].message);
    //return;
  //}
  course.name=req.body.name;
  res.send(course);

});

//function validateCourse(course){
  //const schema={
    //name:Joi.string().min(3).required()
  //};
  //return Joi.string().min(3).validate(course,schema);
//}

app.delete('/api/courses/:id',(req,res)=>{
  const course=courses.find(c=>c.id==parseInt(req.params.id));
  if(!course) res.status(404).send('The course not found');

const index=courses.indexOf(course);
courses.splice(index,1);

res.send(course);

})


app.listen(3000);
