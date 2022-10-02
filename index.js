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
    case "updateById":
      const rewriteContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(rewriteContact);
      break;
    case "removeContact":
      const removeById = await contacts.removeContact(id);
      console.log(removeById);
      break;
    default:
      console.log("Unknown action");
  }
};
// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "3" });
// invokeAction({
//   action: "addContact",
//   name: "Olaf Bodruy",
//   email: "Bodruy.Olaf@nonenimMauris.net",
//   phone: "(777) 451-7038",
// });
// invokeAction({
//   action: "updateById",
//   id: "10",
//   name: "Olaf",
//   email: "Bodruy.Olaf@nonenimMauris.net",
//   phone: "(777) 451-7038",
// });
// invokeAction({ action: "removeContact", id: "9" });
