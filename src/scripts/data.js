const API = {
    getContacts() {
        return fetch("http://localhost:3000/contacts")
            .then(contacts => contacts.json())
    },

    saveContact(newContactObject) {
        return fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContactObject)
        })
    }
}

export default API