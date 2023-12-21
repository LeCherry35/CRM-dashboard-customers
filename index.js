const navData = [
    {
        name: "Dashboard",
        imgName: "key-square.svg"
    },
    {
        name: "Product",
        imgName: "3d-square 1.svg"
    },
    {
        name: "Customers",
        imgName: "user-square 1.svg"
    },
    {
        name: "Income",
        imgName: "wallet-money 2.svg"
    },
    {
        name: "Promote",
        imgName: "discount-shape 1.svg"
    },
    {
        name: "Help",
        imgName: "message-question 1.svg"
    }
]

const customersData = [
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },
    {
        name: "Jane Cooper",
        company: "Microsoft",
        phone: "(225) 555-0118",
        email: "jane@microsoft.com",
        country: "United States",
    },

]

// fill nav 
const navList = document.querySelector(".navigation-list")

navData.map((navItem, id) => {
    const navItemElement = document.createElement("li")
    navItemElement.classList.add("navigation-list__navigation-item")
    if(id === 2) navItemElement.classList.toggle("navigation-list__navigation-item_selected")

    const navImage = document.createElement("img")
    navImage.src = "./img/menu-icons/" + navItem.imgName

    const navText = document.createElement("p")
    navText.classList.add("navigation-item__name")
    navText.innerText = navItem.name

    const navChevron = document.createElement("img")
    if(id === 2) navChevron.src = "./img/chevron-right-white.svg"
    else navChevron.src = "./img/chevron-right 2.svg"
    navChevron.classList.add("navigation-item__chevron")

    navItemElement.append(navImage, navText, navChevron)
    navList.append(navItemElement)

})

// fill customers table

const customersTable = document.querySelector(".customers-table__content")
console.log(customersTable);
customersData.map((customer,id) => {
    const row = document.createElement("div")
    row.classList.add("customers-table__row")
    row.innerHTML = `
        <p>${customer.name}</p>
        <p>${customer.company}</p>
        <p>${customer.phone}</p>
        <p>${customer.email}</p>
        <p>${customer.country}</p>
    `
    
    const status = document.createElement("div")
    status.classList.add("customers-table__status-display")
    
    if (id === 1 || id === 2 || id === 7) {
        status.classList.toggle("customers-table__status-display_active")
        status.innerText = "Active"
    } else status.innerText = "Inactive"
    
    row.append(status)
    customersTable.append(row)
})

//mobile version menu opener
const menuList = document.querySelector(".navigation-block__list")
document.querySelector(".logo-box__menu-opener").addEventListener("click", () => {
    if(menuList.style.display === "none") menuList.style.display = "block"
    else menuList.style.display = "none"
})

