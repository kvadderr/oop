class Product {

    constructor (id_product, name, price, id_category){
        this.id_category = id_category
        this.name = name
        this.price = price
        this.id_product = id_product
    }
   
    fillCombobox(component){
        let option = document.createElement("option");
        option.setAttribute("value", this.id_product);
        option.innerHTML += this.name;
        component.appendChild(option);
    }

    fillTable(table){
        let tr = document.createElement("tr");
        tr.innerHTML += "<td>"  + this.name + "</td>"+
        "<td>"  + this.price + "</td>"+
        "<td><a onclick='deleteProduct("+this.id_product+")'>Удалить</a></td>";
        table.appendChild(tr);
    }
       
}
