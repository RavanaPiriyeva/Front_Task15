let fileInput = document.getElementById('fileInput');
let imgSection =document.getElementById('imgSection');

fileInput.addEventListener('change', function () {
    [...this.files].forEach(file => {
        if (file.type.startsWith('image/')) {
            let reader = new FileReader();
            reader.onload = function () {
                let colose = document.createElement('i')
                colose.classList.add('fa-solid');
                colose.classList.add('fa-xmark');
                colose.classList.add('close-item');
                let div = document.createElement('div')
                let img = document.createElement('img');
                img.setAttribute('src', reader.result);
                imgSection.appendChild(div);
                div.appendChild(img);
                div.appendChild(colose)
                colose.addEventListener('click', function () {
                    colose.parentElement.remove();
                })
            }
            reader.readAsDataURL(file);
        }
        else {
            console.log("Format duz deyil")
            this.value = ''
        }
    })
})
let imgUploadBox = document.getElementById('imgUploadBox');

imgUploadBox.addEventListener('click', function (e) {
    fileInput.click();
})
fileInput.style.display = 'none'
