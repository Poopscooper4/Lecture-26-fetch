// უნდა შექმნათ ღილაკი html-ში, რომლის კლიკზეც ყოველჯერზე უნდა გამოიტანოს ახალი 
// პროდუქტის სახელი და ფასი html-ში , ამისთვის api-ს ბოლოში კონკატენაციით უნდა ჩააწოდოთ
//  ყოველ კლიკზე ახალი ციფრი
// API: https://fakestoreapi.com/products/${number}


let btn = document.getElementById("btn")
let prodnumber = 0

let fetchprod = "https://fakestoreapi.com/products/"

btn.addEventListener("click" , () =>{
    prodnumber++
    console.log(prodnumber);
    fetch("https://fakestoreapi.com/products/" , {Method : "POST"}).then((res) => {
        return res.json();
     }).then((data) => {
         getData(data)
     })

     function getData (prodarr) {
        // console.log(prodarr);
        let founded = prodarr.find((post) => {
            let productdiv = document.getElementById("Products")
            // let p = document.createElement("p")
            // productdiv.appendChild(p)
            // p.textContent = post.category
            if (prodnumber  === post.id) {
                console.log(post);

                let h1 = document.createElement("h1")
                console.log(h1);
                h1.textContent = post.category
                productdiv.appendChild(h1)

                let p = document.createElement("p")
                console.log(p);
                p.textContent = post.description
                productdiv.appendChild(p)

                let image = document.createElement("img")
                image.src = post.image
                console.log(image);
                productdiv.appendChild(image)

                let title = document.createElement("h1")
                title.textContent = post.title
                console.log(title);
                productdiv.appendChild(title)

                let price = document.createElement("h2")
                price.textContent = "Price: " + post.price
                console.log(price);
                productdiv.appendChild(price)

                let count = document.createElement("h2")
                count.textContent = "count: " + post.rating.count
                console.log(count);
                productdiv.appendChild(count)

                let rate = document.createElement("h2")
                rate.textContent = "Rate: " + post.rating.rate
                console.log(rate);
                productdiv.appendChild(rate) 

                let space = document.createElement("p")
                space.textContent = "-------------------------------"
                productdiv.appendChild(space)


            }
        })
     }

})


