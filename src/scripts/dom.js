const contactEntryDOM = document.querySelector("#contactContainer")

const renderContacts = (HTMLRep) => {
    contactEntryDOM.innerHTML += HTMLRep
}

export default renderContacts