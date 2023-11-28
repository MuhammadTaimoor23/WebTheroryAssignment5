const express=require('express');
const app =express();
app.use(express.json());

const students=[{id:1,name :"faizan",fees:200},
{id:82,name :"taimor",fees:20},
{id:19,name :"fasih cake",fees:5},
{id:118,name :"nawab saab",fees:20000000},];
app.get("/",function(req,res){
res.send(epmloyee)
});
app.get("/student/:id", function (req, res) {
    const requestedId = parseInt(req.params.id);
  
    // Use Array.find to get the student with the specified id
    const index = students.findIndex(emp => emp.id === requestedId);
  
    if (index!==-1) {
      res.send(students[index]);
    } else {
      res.status(404).json({ error: 'student not found' });
    }
  });


  app.put("/student/:id", function (req, res) {
    const requestedId = parseInt(req.params.id);
  
    // Use Array.find to get the student with the specified id
    const index = students.findIndex(emp => emp.id === requestedId);
  
    if (index!==-1) {
        students[index]=req.body;
      res.send(students[index]);
    } else {
      res.status(404).json({ error: 'student not found' });
    }
  });
  app.delete("/student/:id", function (req, res) {
    const requestedId = parseInt(req.params.id);
  
    // Use Array.find to get the student with the specified id
    const index = students.findIndex(emp => emp.id === requestedId);
  
    if (index!==-1) {
        students.splice(index,1);
      res.send(students);
    } else {
      res.status(404).json({ error: 'student not found' });
    }
  });
  app.post("/student", function (req, res) {
       students.push(req.body);
       res.send(students);
  });
app.listen(3000);