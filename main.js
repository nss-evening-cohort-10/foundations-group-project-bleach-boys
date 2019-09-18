const gear = [
    {
        image: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T347A1MPA540PT17X22Y67D1008625786S65/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=2564,crop=list,version=1565757568,modelImageVersion=1551791379/bleach-womens-t-shirt.jpg",
        price: "$19.99",
        description: "100% preshrunk cotton. Fabric Weight: 5.0 oz. Product runs small. Double-stitched seams at shoulder, sleeve, collar and waist. This shirt is very durable and reliable.",
        type: "shirt",
        popular: true,
    },
    {
        image: "https://res.cloudinary.com/teepublic/image/private/s--GxLq0lh8--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-45/g_north_west,u_upload:v1462829018:production:blanks:ekerz3afkzxin2pgqj8h,x_-395,y_-370/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1458051453/production/designs/448547_1.jpg",
        price: "$14.99",
        description: "Music Band T-Shirt - are you looking for a cool 'music band' t-shirt? Then you've found it! The perfect shirt for saying 'how do you do fellow kids?' - you'll fit in perfectly with this Funny Music Band Shirt.",
        type: "shirt",
        popular: false,
    },
    {
        image: "https://ih0.redbubble.net/image.278474159.9435/ra,unisex_tshirt,x2200,101010:01c5ca27c6,front-c,392,146,750,1000-bg,f8f8f8.u1.jpg",
        price: "$19.99",
        description: "Slim fit, but if that’s not your thing, order a size up. Solid color t-shirts are 100% cotton; heather grey is 90% cotton, 10% polyester; charcoal heather is 52% cotton, 48% polyester",
        type: "shirt",
        popular: false,
    },
    {
        image: "https://s3.amazonaws.com/hatscolor/wp-content/uploads/2019/03/24124444/image-1-247x296.png",
        price: "$24.99",
        description: "100% cotton twill. 6 panel embroidered. Adjustable Hook and Loop closure. One size fits most.",
        type: "Cap",
        popular: true,
    },
    {
        image: "https://media.customon.com/unsafe/600x600/img.customon.com/img/2314145/7909,42,0,1,62,303.2,178.61236363636,37.9,25.693818181818,1478194510-Clorox-Bleach-Pyrocinycal-Leafy/merchantimagenew/clorox-bleach-pyrocinycal-leafy-brushed-cotton-twill-hat-white.jpg",
        description: "Fabric 100% cotton in front two panels; 100% polyester Spacer Mesh in mid and back panels. Closure 7-position adjustable snap.",
        price: "14.99",
        type: "cap",
        popular: false,
    },
    {
        image: "https://www.myanimeshoponline.com/wp-content/uploads/2018/09/bwallet-300x437.jpg",
        price: "$14.99",
        description: "100% genuine leather. Stylish black wallet that will make you much cooler than all the instructors in class.",
        type: "misc",
        popular: true,
    },
    {
        image: "https://ih0.redbubble.net/image.454199651.7990/ssrco,mhoodie,womens,oatmeal_heather,front,tall_three_quarter,x1000-bg,f8f8f8.u2.jpg",
        price: "$39.99",
        description: "Heavyweight 9oz preshrunk cotton rich fleece made from 80% Cotton, 20% Polyester. Front pouch pocket, matching drawstring and rib cuffs. Ethically sourced following the World Responsible Apparel Practices Standards. Note: If you like your hoodies baggy go 2 sizes up.",
        type: "shirt",
        popular: false,
    },
    {
        image: "https://media.customon.com/unsafe/600x600/img.customon.com/img/2313934/7909,13,0,0,62,168,98.967272727273,21,40.516363636364,1478194510-Clorox-Bleach-Pyrocinycal-Leafy/merchantimagenew/clorox-bleach-pyrocinycal-leafy-zip-up-hoodie-white.jpg",
        price: "$49.99",
        description: "Prepare to be astonished with the quality of our unisex zip-up hoodie. Comfortable, durable, and softer than other brand, this zip-up hoodie is a ringspun combed cotton and polyester combined. Ringspun combed cotton is no ordinary cotton which came from an extensive process of spinning, twisting, and thinning of the cotton strands.",
        type: "jacket",
        popular: false,
    },
]

const printToDom = (message, divId) => {
    document.getElementById(divId).innerHTML = message
}

const printGear = (gearArray) => {
    let stringToPrint = '';
    for (let i = 0; i < gearArray.length; i++) {
        const merch = gearArray[i]
        stringToPrint += `
        <div class="container card mb-3" id="merchCards" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${merch.image}" class="card-img" id="imageCard" alt="image of ${merch.type}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <p class="card-text">${merch.description}</p>
                    <p class="card-text">${merch.price}</p>
                </div>
            </div>
          </div>
        </div>
        `
    }
    printToDom(stringToPrint, 'gear-zone')
}

printGear(gear);