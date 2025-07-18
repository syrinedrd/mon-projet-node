const fs = require('fs');

// lire contacts
function readContacts() {
  const data = fs.readFileSync('contact.json', 'utf-8');
  return JSON.parse(data);
}

// écrire contacts
function writeContacts(contacts) {
  fs.writeFileSync('contact.json', JSON.stringify(contacts, null, 2));
}

// créer nouveau contact
function createContact(name, email) {
  const contacts = readContacts();
  contacts.push({ id: Date.now(), name, email });
  writeContacts(contacts);
  console.log('Contact ajouté');
}

// update contact existant
function updateContact(id, newName, newEmail) {
  const contacts = readContacts();
  const index = contacts.findIndex(c => c.id === id);
  if (index !== -1) {
    contacts[index].name = newName;
    contacts[index].email = newEmail;
    writeContacts(contacts);
    console.log('Contact modifié');
  } else {
    console.log('Contact non trouvé');
  }
}

// supprimer contact
function deleteContact(id) {
  let contacts = readContacts();
  const newContacts = contacts.filter(c => c.id !== id);
  if (newContacts.length === contacts.length) {
    console.log('Contact non trouvé');
  } else {
    writeContacts(newContacts);
    console.log('Contact supprimé');
  }
}

