const task = document.getElementById("taskInput");
      const addBtn = document.getElementById("addBtn");
      let ul = document.getElementById("list");

      function tasking() {
        if (task.value == "") {
          document.getElementById("msg").style.display = "block";
        } else {
          document.getElementById("msg").style.display = "none";
          let li = document.createElement("li");
          li.innerHTML = `<div class="tName">${task.value}</div> <div class="act"><button>edit</button> <span>x</span></div> `;
          ul.appendChild(li);
          localStorage.setItem("data", ul.innerHTML);
          task.value = "";
        }
      }
      task.addEventListener("keypress",(event)=>{
        if(event.key=="Enter")
            tasking();
      })
      addBtn.addEventListener("click",tasking);
      ul.addEventListener("click", (e) => {
        if (e.target.tagName == "LI"  ) {
          e.target.classList.toggle("checked");
          localStorage.setItem("data", ul.innerHTML);
        }else if(e.target.tagName=="DIV"){
            e.target.parentElement.classList.toggle("checked");
            localStorage.setItem("data", ul.innerHTML);
        }
         else if (e.target.tagName === "SPAN") {
            e.target.parentElement.parentElement.remove();
        }
        localStorage.setItem("data", ul.innerHTML);
      });
      ul.innerHTML = localStorage.getItem("data");

     
    //   edit section

    ul.addEventListener("click",(e)=>{
        
        if(e.target.tagName=="BUTTON"){
            let li=e.target.parentElement.parentElement;         
            let currentTask=li.getElementsByClassName("tName")[0].innerText;
             li.innerHTML=`<input type="text" value="${currentTask}" class="iUpdate"> <button class="updateBtn">update</button>`
             li.getElementsByClassName("updateBtn")[0].addEventListener("click",()=>{
                let newTask=li.getElementsByClassName("iUpdate")[0].value;
                li.innerHTML = `<div class="tName">${newTask}</div> <div class="act"><button>edit</button> <span>x</span></div> `;
                localStorage.setItem("data", ul.innerHTML);
             })


        }
    })