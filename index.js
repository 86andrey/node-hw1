const contacts = require("./db/contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;
    case "update":
      const rewriteContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(rewriteContact);
      break;
    case "remove":
      const removeById = await contacts.removeContact(id);
      console.log(removeById);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

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
