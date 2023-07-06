class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, stock) {
        const producto = {code:this.getId(),
                       title:title, 
                       description:description, 
                       price:price, 
                       thumbnail:thumbnail,
                       stock: stock};
        

        
        if (title === undefined) {
            console.log ("producto incompleto revisar");
            return false;
        }
        if (description === undefined) {
            console.log ("producto incompleto revisar");
            return false;
            
        }
        if (price === undefined) {
            console.log ("producto incompleto revisar");
            return false;
        }
        if (thumbnail === undefined) {
            console.log ("producto incompleto revisar");
            return false;
        }
        if (stock === undefined) {
            console.log ("producto incompleto revisar");
            return false;
        }

        this.products.push(producto);
    }

    getId() {
        let cod = 0;

        this.products.forEach(producto => {
            cod = producto.code > cod && producto.code;
        });

        return (cod + 1);
    }

    getProductsById (idProducto){
        let pos = this.products.findIndex(producto => producto.code === idProducto);
        console.log(idProducto);
        if (pos > -1) {
            if (idProducto > -1) {
                console.log("Si contamos con este producto");
            } 
        } else {
            console.log("NOT FOUND");
        }
    }
    
}

const NP = new ProductManager();
NP.addProduct("jugo", "jugo de frutas", 100,"https://www.clarin.com/img/2018/11/19/1moJNpDSB_340x340__1.jpg", 50);
NP.addProduct("trago", "trago delicioso", 200,"https://www.clarin.com/img/2022/01/17/negroni-un-trago-clasico-que___QwCr1ph7M_2000x1500__1.jpg", 40);
console.log (NP.getProducts());
NP.getProductsById(1);
NP.getProductsById(2);
NP.getProductsById(3);
console.log (NP.getProducts());
NP.addProduct("chocolate","chocolate caliente","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyPfb9m9WI9iwGijaOgxZA01PK0Lhyv-eyf0JOs-6Zy3TDaKvrdzgoJu0A74QQrvZwpY&usqp=CAU", 30);
console.log (NP.getProducts());
NP.getProductsById(4);
NP.getProductsById(1);
console.log (NP.getProducts());
