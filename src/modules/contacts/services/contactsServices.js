import { CONTACTS_URL } from "../constants";

export function getContacts() {
  return fetch(CONTACTS_URL).then((res) => res.json());
}

export function deleteContact(id) {
  return fetch(CONTACTS_URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function createNewContact(newContactItem) {
  return fetch(CONTACTS_URL, {
    method: "POST",
    body: JSON.stringify(newContactItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
