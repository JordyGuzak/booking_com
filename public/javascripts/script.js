console.log("hello!");

window.onload = onLoadDocumentEventHandler

function initialize() {
    const searchField = document.getElementById('search')
    searchField.addEventListener('change', onSearchValueChangedEventHandler)
}

function onLoadDocumentEventHandler(event) {
    initialize()
}

function onSearchValueChangedEventHandler(event) {
   console.log(event.target.value) 

}