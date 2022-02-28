const { v4: uuidv4 } = require("uuid");

let users = [];

const getUsers = (req, res) => {
  res.render("contacts", { users: users });
};

const addUsers = (req, res) => {
  res.render("new");
};

const createContact = (req, res) => {
  const user = {
    id: uuidv4(),
    ...req.body,
  };
  users.push(user);
  res.redirect("/contacts");
};

const editUserPage = (req, res) => {
  const { id } = req.params;
  let user = users.find((user) => user.id == id);
  res.render("edit-contact", { user: user });
};

const editUser = (req, res) => {
  const { id } = req.params;
  let { name, phoneNum } = req.body;

  let user = users.find((user) => user.id == id);
  user.name = name;
  user.phoneNum = phoneNum;
  res.redirect("/contacts");
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.redirect("/contacts");
};

module.exports = {
  createContact,
  getUsers,
  editUserPage,
  deleteUser,
  addUsers,
  editUser,
};
