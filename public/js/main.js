const formEl = document.getElementById('cusId')
let update = document.getElementById('update')
let deleteBtn = document.querySelector('.delete-btn')



update.addEventListener('submit', handleUpdate)

deleteBtn.addEventListener('click', handleDelete)

async function handleUpdate(ev) {
    ev.preventDefault()

    let form = ev.currentTarget
    let formData = new FormData(form) 
    let url = form.action
    let formBody = Object.fromEntries(formData.entries())

    // let option = requestOptions('put', formBody)

    try {
        let response = await fetch(url, requestOptions('put', formBody))
        let data = await response.json()
        console.log(data)
    }
    catch{
        err => console.error(err)
    }


}

async function handleDelete() {
    let deleteTarget = document.querySelector('.delete-input').value
    let bodyitem = {};
    (deleteTarget) ? bodyitem.name = deleteTarget :bodyitem.name =  null;

    try {
        let response = await fetch('/details', requestOptions('delete', bodyitem))
        let data = await response.json()
        console.log(data)
        location.reload()
    }
    catch {
        err => console.error(err)
    }

}


function requestOptions(verb, bodyitem) {
    let options = {
        method: verb,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyitem)
    }
    return options
}