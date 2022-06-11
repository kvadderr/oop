class Client {

    constructor (id_client, FIO, phone){
        this.id_client = id_client
        this.FIO = FIO
        this.phone = phone
    }
   
    fillCombobox(component){
        let option = document.createElement("option");
        option.setAttribute("value", this.id_client);
        option.innerHTML += this.FIO;
        component.appendChild(option);
    }

    fillTable(table){
        let tr = document.createElement("tr");
        tr.innerHTML += "<td>"  + this.FIO + "</td>"+
        "<td>"  + this.phone + "</td>"+
        "<td><a onclick='deleteClient("+this.id_client+")'>Удалить</a></td>"+
        "<td><a href = 'seeOrder.html'>Просмотр</a></td>";
        table.appendChild(tr);
    }

}
