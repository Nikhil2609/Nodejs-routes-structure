import express from "express";
export const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.send('User main Route');
});

userRoutes.get('/list', (req, res) => {
  res.send('user list');
});

userRoutes.get('/:id', (req, res) => {
  console.log("req",req.params.id)
  // res.send('user parameter',req.params.id);
  res.send(`user parameter ${req.params.id}`)
});

