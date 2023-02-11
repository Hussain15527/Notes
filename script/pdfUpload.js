const addButton = document.querySelector(".addButton");
const fileInput = document.querySelector(".fileInput");
addButton.addEventListener('click', response => {
    response.preventDefault();

    const selectedFile = fileInput.files[0];
    const formData = new FormData();
    formData.set('selectedFile', selectedFile);
    axios.post(`./upload/${selectedFile["name"]}`, formData)
        .then(res => {
            console.log(res)
        })

})
