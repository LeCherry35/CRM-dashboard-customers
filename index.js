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

const navList = document.querySelector('.navigation-list')
navData.map((navItem, id) => {
    const navItemElement = document.createElement("li")
    navItemElement.classList.add("navigation-list__navigation-item")
    if(id === 2) navItemElement.classList.toggle("navigation-list__navigation-item-selected")

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

