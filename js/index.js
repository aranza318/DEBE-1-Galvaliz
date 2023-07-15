const fs = require("fs");

class ProductManager {
    constructor() {
        this.path= "Productos.json";
        this.products = [];
        this.createFile();
    }


    createFile(){
        if(!fs.existsSync(this.path)){
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        }
    }
    
    //Agrega el producto
    addProduct(product) {
        if(this.validateCode(product.code)){
            console.log("Codigo en existencia");
        } else{
        const producto = {id: this.getId(),
                          code: product.code,
                          title:product.title, 
                          description:product.description, 
                          price:product.price, 
                          thumbnail:product.thumbnail,
                          stock: product.stock};
        this.products = this.getProducts()
        this.products.push(producto);
        this.saveProducts();
        console.log("Producto agregado");
    }
    }
    
    //Consigue el id
    getId() {
        let cod = 0;

        this.products.forEach(producto => {
            if(producto.id>cod){ 
                cod = producto.id;
            }
        });

        return cod + 1;
    }
    
    //Valida el codigo del producto
    validateCode(code){
        return this.products.some(item=> item.code === code);
    }
    
    //Busca el producto por el id
    getProductsById (id){
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        return this.products.find(producto => producto.id === id) || "NOT FOUND"
     
    }
    
    //Actualiza el producto segun su id
    updateProduct(id, product) {
        this.products = this.getProducts();
        let pos = this.products.findIndex(item => item.id === id);

        if (pos > -1) {
            this.products[pos].title = product.title;
            this.products[pos].description = product.description;
            this.products[pos].price = product.price;
            this.products[pos].thumbnail = product.thumbnail;
            this.products[pos].code = product.code;
            this.products[pos].stock = product.stock;
            this.saveProducts();
            console.log("Product updated!");
        } else {
            console.log("Not found!");
        }
    }
    
    //Guarda los productos en el array (utilizado en la funcion anterior por ejemplo)
    saveProducts(){
        fs.writeFileSync(this.path, JSON.stringify(this.products));
    }

    //Borra el producto segun el id
    deleteProduct(id){
        this.products= this.getProducts();
        let position = this.products.findIndex(item => item.id === id);
        if(position > -1){
            this.products.splice(position, 1); (0,1)
            this.saveProducts();
            console.log("Product #" + id + "deleted");

        }else {
            console.log("Not Found");
        }
    }
    
    //Muestra los objetos en el json 
    getProducts() {
        let productosTotales = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        return productosTotales;

    }

}

const NP = new ProductManager();
NP.addProduct({code:"jugoF",title:"jugo", description:"jugo de frutas", price:100, thumbnail:"https://www.clarin.com/img/2018/11/19/1moJNpDSB_340x340__1.jpg",stock:50});
NP.addProduct({code:"tragoD",title:"trago", description:"trago delicioso", price:200, thumbnail:"https://www.clarin.com/img/2022/01/17/negroni-un-trago-clasico-que___QwCr1ph7M_2000x1500__1.jpg", stock:40});
console.log (NP.getProducts());
NP.getProductsById(1);
NP.getProductsById(2);
NP.getProductsById(3);
console.log (NP.getProducts());
NP.addProduct({code:"choco",title:"chocolate", description:"chocolate caliente", price:300, thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyPfb9m9WI9iwGijaOgxZA01PK0Lhyv-eyf0JOs-6Zy3TDaKvrdzgoJu0A74QQrvZwpY&usqp=CAU", stock:30});
console.log (NP.getProducts());
NP.getProductsById(4);
NP.getProductsById(1);
console.log (NP.getProducts());
NP.getProductsById(1);
NP.updateProduct (1,{code:"JugoF",title:"jugo frutal", description:"jugo de frutas", price:100, thumbnail:"https://www.clarin.com/img/2018/11/19/1moJNpDSB_340x340__1.jpg",stock:50} );
console.log(NP.getProducts());
NP.deleteProduct(1);
NP.deleteProduct(2);
NP.addProduct({code:"jugoF",title:"jugo", description:"jugo de frutas", price:100, thumbnail:"https://www.clarin.com/img/2018/11/19/1moJNpDSB_340x340__1.jpg",stock:50});




