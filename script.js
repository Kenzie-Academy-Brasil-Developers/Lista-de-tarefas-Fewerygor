const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  if(taskInfo.tipo === 'Urgente'){
    span.classList.add('span-urgent');
  }else if(taskInfo.tipo === 'Prioritário'){
    span.classList.add('span-priority');
  }else{
    span.classList.add('span-normal');
  }
  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  button.addEventListener('click', function(e){

    tasks.splice(tasks.indexOf(taskInfo),1);
    renderElements(tasks);
    // for (let i = 0; i < tasks.length; i++) {
    //   // e.preventDefault();
    //   tasks.splice(li);
    //   renderElements(tasks);
    // }
  })

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}


function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for (let i = 0; i < taskList.length; i++) {  
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }

  // card = createCard(taskList[1]);
  // htmlList.appendChild(card);

  // card = createCard(taskList[2]);
  // htmlList.appendChild(card);
}
renderElements(tasks);


const addTask = document.querySelector('#btnSubmit');

addTask.addEventListener('click', function(e){
  let taskTitle = document.querySelector("#input_title").value;
  let taskPriority = document.querySelector("#input_priority").value;
  e.preventDefault();
  let task = {
    titulo: taskTitle,
    tipo: taskPriority
  };
  tasks.push(task);
  renderElements(tasks);
})

