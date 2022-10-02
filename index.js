const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;
    case "getContactById":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;
    case "addContact":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "updateContact":
      const rewriteContact = await contacts.addContact(name, email, phone);
      console.log(rewriteContact);
      break;
    default:
      console.log("Unknown action");
  }
};
// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "3" });
invokeAction({
  action: "addContact",
  name: "Olaf Bodruy",
  email: "Bodruy.Olaf@nonenimMauris.net",
  phone: "(777) 451-7038",
});
