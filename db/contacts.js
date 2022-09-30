const fs = require("fs").promises;
const path = require("path");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */
const contactsPath = path.resolve("contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  console.log(contacts);
  return contacts;
};

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
