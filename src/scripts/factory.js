const createContact = (contactEntry) => {
    return `
        
            <div class="card">
                <section>
                    <h2><b>${contactEntry.fullName}</b></h2>
                    <p>${contactEntry.phoneNumber}</p>
                    <p>${contactEntry.address}</p>
                </section> 
            </div>  
       
    `
}

export default createContact