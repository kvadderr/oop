class Order {

    constructor (id_order, id_client, name){
        this.id_order = id_order
        this.name = name
        this.id_client = id_client
    }
   
    fillCombobox(component){
        let option = document.createElement("option");
        option.setAttribute("value", this.id_order);
        option.innerHTML += this.name;
        component.appendChild(option);
    }

    fillTable(table){
        let tr = document.createElement("tr");
        tr.innerHTML += "<td>"  + this.name + "</td>"+
        "<td><a onclick='deleteProduct("+this.id_order+")'>Удалить</a></td>";
        table.appendChild(tr);
    }

}
