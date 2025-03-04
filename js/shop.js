
document.addEventListener("DOMContentLoaded", function () {
    
    // let quantity = document.querySelector('.quantity');
    let mainParentItem = document.querySelector("#items");
    
    //list of products
    let products = [
        {
            id: 1,
            name: "Sidh Mangal Yantra",
            image: "sidhMangal.jpg",
            price: "6100"
        },
        {
            id: 2,
            name: "Sidh Shukra Yantra",
            image: "sidhshukra.jpg",
            price: "6100"
        },
        {
            id: 3,
            name: "Sidh Chandra Yantra",
            image: "sidhChandra.jpg",
            price: "6100"
        },
        {
            id: 4,
            name: "Sidh Guru Yantra",
            image: "sidhGuru.jpg",
            price: "6100"
        },
        {
            id: 5,
            name: "Sidh Surya Yantra",
            image: "sidhsurya.jpg",
            price: "6100"
        },
        {
            id: 6,
            name: "Sidh Shani Yantra",
            image: "sidhshani.jpg",
            price: "6100"
        },
        {
            id: 7,
            name: "Sidh Budh Yantra",
            image: "sidhBudh.jpg",
            price: "6100"
        },
        {
            id: 8,
            name: "Sidh Rahu Yantra",
            image: "sidhRahu.jpg",
            price: "6100"
        },
        {
            id: 9,
            name: "Sidh Ketu Yantra",
            image: "sidhKetu.jpg",
            price: "6100"
        },
        {
            id: 10,
            name: "Pooja Chowki",
            image: "PoojaChowki.png",
            price: "800"
        },
        {
            id: 11,
            name: "Manokamna Yantra",
            image: "mnokaamna.png",
            price: "10100"
        },
        {
            id: 12,
            name: "Kuber Yantra",
            image: "KuberYantra.png",
            price: "1100"
        },
        {
            id: 13,
            name: "Bhojpatra Yantra",
            image: "Bhojpatraaa.png",
            price: "10100"
        },
        {
            id: 14,
            name: "Dhanvantri Yantra",
            image: "dhanvantri.png",
            price: "10100"
        },
        {
            id: 15,
            name: "Hanuman Yantra",
            image: "hanumanYantra.webp",
            price: " 2100"
        },
        {
            id: 16,
            name: "Abhimantrit Kapoor (100gms)",
            image: "kapoor_ball.png",
            price: "6100"
        }
    ]
    
    // function to display products on screen
    function initList() {
        products.forEach((value) => {        
            let myDivElem = document.createElement("div");
            myDivElem.classList.add("col-lg-4", "col-md-4", "col-sm-6", "col-xs-12");
            
            if (value.id) {
                myDivElem.innerHTML = `
                <div class="content">
                    <div class="img_container mrT_40">
                        <img class="pointer" src="images/${value.image}" alt="">
                        <div class="imgOverlay">
                            <img src="images/${value.image}" alt="">
                            <div class="cross">
                                <i class="fa fa-times pointer" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="d_fl mr_40" style="align-items: center;
                                                        justify-content: center;
                                                        gap: 1.15rem;
                            ">
                            <div class="imgInfo text-center" style="margin: 0;">
                                <p>${value.name}</p>
                                <p>&#x20B9; ${value.price} /-</p>
                            </div>
                            <div class="modal-checkbox" class="addIcon w_16" data-id="${value.id}" data-name="${value.name}">
                                <!-- <i class="fa fa-plus"></i> -->
                                <!-- <span><b>Add To Cart</b></span> -->
                                <button style="background-color: #113d24;
                                                color: white;
                                                font-weight: 600;
                                                border-radius: 10px;
                                                padding: 12px 20px;
                                                outline: none;
                                                border: 0;
                                                font-style: normal;
                                                font-size: 15px;
                                                width: max-content;
                                ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
            
            mainParentItem.appendChild(myDivElem);
        })
    }
    initList(); // calling the function to display products;
    
    
    // let addBtn = document.querySelectorAll(".addIcon");
    // addBtn.forEach((btn) => {
    //     btn.classList.add("pointer");
    //     btn.addEventListener("click", () => {  
    //        const itemId = Number(btn.getAttribute("data-id")); // getting attribute for the item id
    //        cartCreation(itemId); // calling function to update/add to cart with its itemId
    //     })
    // })
    
    // // function to update the cart of the user
    // function cartCreation(itemId) { 
    
    //     // creating a cart in local storage in user's side. If not then Creating
    //     let storeCartItems = JSON.parse(localStorage.getItem("storeCartItems")) || [];
    
    //     // Find the product being added from the total products
    //     let productToAdd = products.find(product => product.id === itemId);
    
    //     if (productToAdd) {

    //         // Check if the product already exists in the cart
    //         let existingItem = storeCartItems.find(item => item.id === itemId);

    //         if (existingItem) {
    //             // If item exists, increment the quantity
    //             existingItem.quantity += 1;
    //         }
    //         else {
    //             // Otherwise, add the new item with quantity 1
    //             storeCartItems.push({...productToAdd, quantity: 1});
    //         }

    //         // Save the updated cart back to local storage
    //         localStorage.setItem("storeCartItems", JSON.stringify(storeCartItems));
    
    //         console.log("Item added to cart:", productToAdd);
    //         console.log("Updated cart:", storeCartItems);
            
    //     } 
    //     else {
    //         console.log("Product not found:", itemId);
    //     }
        
    //     updateQuantity(); // calling the function once again for updated quantity.
        
    // }
    
    // // function to update the cart quantity and show on screen
    // function updateQuantity () {
        
    //     // fetching the localStorage from the user's device
    //     let totalItems = JSON.parse(localStorage.getItem("storeCartItems")) || [];
    //     let lengthOfCart = totalItems.length;
        
    //     if (lengthOfCart > 0) {
    //         quantity.classList.remove("d_none");
    //         quantity.classList.add("d-block");
    //         quantity.innerHTML = lengthOfCart;
    //     }
    //     else {
    //         quantity.classList.add("d_none");
    //     }
        
    // };
    
    // updateQuantity(); // initial calling function to show the quantity when document is loaded. 

    const checkoutModalBtn = document.getElementsByClassName("modal-checkbox")
    const modal = document.getElementById('order_modal_overlay_id');

    Array.from(checkoutModalBtn).forEach(elementBtn => {
        elementBtn.addEventListener("click",()=> {
            modal.style.display = "block";
        })
    })

    document.getElementById("close_modal_btn").addEventListener('click',()=>{
        modal.style.display = "none"
    })
})






