function VVDATE()
{
    document.getElementById("VVDAN").style.display = "block";
    document.getElementById("formvvod").style.display = "none";
}

function Refresh()
        {
            var deleteElement = spisok.querySelectorAll('ul');
           for (let i = 0; i < deleteElement.length; i++) {
             deleteElement[i].remove();
           }
           elem = document.createElement("ul");
            for (let key in localStorage)
            {
            if (!localStorage.hasOwnProperty(key)) {
                continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
              }
                
                elem1 = document.createElement("li");
                elem1.setAttribute("id", key);
                elem1.addEventListener("click", funcINFO);
                array2 = JSON.parse(localStorage.getItem(key));
                array1 = array2.female + " " + array2.name;
                ELEM = document.createTextNode(array1);
                elem1.appendChild(ELEM);
                elem.appendChild(elem1);
                spisFULL.appendChild(elem);

            }
        }


function saveDate()
{
    //класс для создания новых объектов (сотрудников)
        class dateUser
        {
            constructor (name, female, otch, date, foto)
            {
                this.name = name
                this.female = female
                this.otch = otch
                this.date = date
                this.foto = foto
            }
        }
    Name = document.getElementById("name").value;
    Female = document.getElementById("female").value;
    Otch = document.getElementById("otch").value;
    DAte = document.getElementById("DATE").value;
    Foto = document.getElementById("foto").value;
    // Foto = foto.files[0];
    // URL.createObjectURL(
    
    //console.log(URL.createObjectURL(foto.files[0]));

    user = new dateUser(Name, Female, Otch, DAte, Foto);
    
    if (user.female == "")
    {
        return;
    }
    else
    {       
        x = user.female;
        y = JSON.stringify(user);
        localStorage.setItem(x,y);
        document.getElementById("VVDAN").style.display = "none";
        document.getElementById("formvvod").style.display = "block";
    }
    console.log(user);
 Refresh();
}

var deleteElement = spisok.querySelectorAll('ul');
           for (let i = 0; i < deleteElement.length; i++) {
             deleteElement[i].remove();
           }
elem = document.createElement("ul");
for (let key in localStorage)
          {
            if (!localStorage.hasOwnProperty(key)) {
              continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
            }
              
              elem1 = document.createElement("li");
              elem1.setAttribute("id", key);
              elem1.addEventListener("click", funcINFO);
              array2 = JSON.parse(localStorage.getItem(key));
              array1 = array2.female + " " + array2.name;
              ELEM = document.createTextNode(array1);
              elem1.appendChild(ELEM);
              elem.appendChild(elem1);
              spisFULL.appendChild(elem);
          }




function deleteItems()
 {
    localStorage.clear();
    var deleteElement = spisFULL.querySelectorAll('ul');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
    var deleteElement = infoFULL.querySelectorAll('ul');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
  }

  function funcINFO(event)
  {
    var deleteElement = infoFULL.querySelectorAll('ul');
    for (let i = 0; i < deleteElement.length; i++) {
      deleteElement[i].remove();
    }
    elem0 = document.createElement("ul");
    for (let key in localStorage)
    {
      if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }

        if (event.target.id == key)
        {
          array2 = JSON.parse(localStorage.getItem(key));

          
          elem2 = document.createElement("li");
          elem2.innerHTML = "Фамилия: " + array2.female;
          elem3 = document.createElement("li");
          elem3.innerHTML = "Имя: " + array2.name;
          elem4 = document.createElement("li");
          elem4.innerHTML = "Отчество: " + array2.otch;
          elem5 = document.createElement("li");
          elem5.innerHTML = "Дата рождения: " + array2.date;
          elem6 = document.createElement("img");
          elem6.src = array2.foto;

          // ELEM = document.createTextNode(array1);
          // elem1.appendChild(ELEM);
          elem0.appendChild(elem2);
          elem0.appendChild(elem3);
          elem0.appendChild(elem4);
          elem0.appendChild(elem5);
          elem0.appendChild(elem6);
          infoFULL.appendChild(elem0);
        }
    }

  }