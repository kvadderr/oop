class Category {

    constructor (id_category, name){
        this.id_category = id_category
        this.name = name
    }
   
    fillCombobox(component){
        let option = document.createElement("option");
        option.setAttribute("value", this.id_category);
        option.innerHTML += this.name;
        component.appendChild(option);
    }

    fillTable(table){
        let tr = document.createElement("tr");
        tr.innerHTML += "<td>"  + this.name + "</td>"+
        "<td><a onclick='deleteCategory("+this.id_category+")'>Удалить</a></td>";
        table.appendChild(tr);
    }

}
