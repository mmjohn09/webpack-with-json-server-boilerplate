import API from "./data.js"
import createContact from "./factory.js"
import renderContacts from "./dom.js"

const contactEntryDOM = document.querySelector("#contactContainer")


const getAndRenderContacts = () => {
    contactEntryDOM.innerHTML = ""
    API.getContacts().then((parsedContacts) => {
        for (const contact of parsedContacts) {
            const contactHTML = createContact(contact)
            renderContacts(contactHTML)
        }
    })
}


getAndRenderContacts()


const contactName = document.querySelector("#fullName")
const contactPhone = document.querySelector("#phoneNumber")
const contactAddress = document.querySelector("#address")


const createContactObject = (fullName, phoneNumber, address) => {
    return {
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: address
    }
}


document.querySelector("#submitButton").addEventListener("click", event => {
    const newContact = createContactObject(contactName.value, contactPhone.value, contactAddress.value)
    API.saveContact(newContact).then(getAndRenderContacts)

    contactName.value = ""
    contactPhone.value = ""
    contactAddress.value = ""
})