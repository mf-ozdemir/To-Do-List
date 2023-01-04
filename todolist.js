// HTML de olan etiketleri tanımladık
let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")

// Listeye eklendi ve boş ekleme yapılamaz uyarısı ekledik
btnDOM.addEventListener("click", function () {
  if (taskDOM.value.trim() == "") {
    $(".error").toast("show");
    return
  } else {
    $(".success").toast("show");
  }

// Localstorage ekleme
  let taskValue = taskDOM.value
  let yapilacak;
  if (localStorage.getItem("yapilacaklar") === null) {
    yapilacak = [];
  } else {
    yapilacak = JSON.parse(localStorage.getItem("yapilacaklar"));
  }

  yapilacak.push(taskValue)

  localStorage.setItem("yapilacaklar", JSON.stringify(yapilacak))

// Listeye ekleme yapmak 
  const ullength = document.createElement("li")
  ullength.innerHTML = taskDOM.value
  taskDOM.value = ""
  ullength.addEventListener("click", function () {
    this.classList.toggle("checked") // Listedeki elemanları işaretlemek için checked yaptık
  })

  listDOM.appendChild(ullength)
//Listede oluşturulan elemanlara çarpı işareti oluşturduk
  let deleteButton = document.createElement("span");
  ullength.append(deleteButton);
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "\u00D7"
  deleteButton.classList.add("close");
//listeye eklenen elemanı silmek için çarpı işaretine silme metodu atadık 
  deleteButton.addEventListener("click", function () {
    this.parentElement.remove();
    localStorage.removeItem("yapilacaklar")
  })

})

