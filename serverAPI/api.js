const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const users = [
  { id: 1, name: 'bala veeraiah', email: 'bala@gmail.com', status: 'active', role: 'admin' },
  { id: 2, name: 'srinuvas', email: 'srinu@gmail.com', status: 'Inactive', role: 'user' },
  { id: 3, name: 'venkatesh', email: 'venkat@gmail.com', status: 'active', role: 'guest' },
];

const permissions = [
  { id: 1, role: 'Admin', access: 'View, Edit, Delete users, Roles, Permissions' },
  { id: 2, role: 'Manager', access: 'View Users, View Roles, View Permissions' },
  { id: 3, role: 'User', access: 'View Users, View Roles' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/permissions', (req, res) => {
  res.json(permissions);
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running`);
});
