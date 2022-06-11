class Basket {

    constructor (id_basket, id_product, count, name){
        this.id_basket = id_basket
        this.count = count
        this.id_product = id_product
        this.name = name
    }
   
    fillCombobox(component){
        let divs = document.createElement("button");
        divs.innerHTML = "<button onclick='cat["+this.id_category+"].view()'>"+this.name + "</button>";
        component.appendChild(divs);
    }

    fillTable(table){
        let tr = document.createElement("tr");
        tr.innerHTML += "<td>"  + this.name + "</td>"+
        "<td>"  + this.count + "</td>"+
        "<td><a onclick='deleteProduct("+this.id_basket+")'>Удалить</a></td>";
        table.appendChild(tr);
    }
       
    getCat(table){
        let tr = document.createElement("tr");
        tr.innerHTML += "<td>"  + this.name + "</td>"+
        "<td>"  + this.count + "</td>";
        table.appendChild(tr);
    }

}
