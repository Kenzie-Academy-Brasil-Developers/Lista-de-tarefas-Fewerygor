const tasks = [
  {
    title: 'Comprar comida para o gato',
    type: 'Urgente',
  },
  {
    title: 'Consertar Computador',
    type: 'Prioritário',
  },
  {
    title: 'Beber água',
    type: 'Normal',
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const taskLi = document.createElement('li');
  const taskDiv = document.createElement('div');
  const taskSpan = document.createElement('span');
  const taskP = document.createElement('p');

  if(taskInfo.type === 'Urgente'){
    taskSpan.classList.add('span-urgent');
  }else if(taskInfo.type === 'Prioritário'){
    taskSpan.classList.add('span-priority');
  }else{
    taskSpan.classList.add('span-normal');
  }
  // Adicionando o titulo da tarefa como texto do paragrafo
  taskP.innerText = taskInfo.title;

  // Adicionando span e paragrafo a div
  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(taskP);

  // Criando botão para deletar tarefa
  const button = document.createElement('button');

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  button.addEventListener('click', function(e){

    tasks.splice(tasks.indexOf(taskInfo),1);
    renderElements(tasks);
  })

  /// Adicionando a div e o botão de deletar ao list item
  taskLi.appendChild(taskDiv);
  taskLi.appendChild(button);

  return taskLi;
}


function renderElements(taskList) {
  const htmlList = document.querySelector('.tasks');
  htmlList.innerHTML = "";

  // Ajustar a lógica
  for (let i = 0; i < taskList.length; i++) {  
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }
}
renderElements(tasks);

const addTask = document.querySelector('#btnSubmit');

addTask.addEventListener('click', function(e){
  let taskTitle = document.querySelector('#input_title').value;
  let taskPriority = document.querySelector('#input_priority').value;
  e.preventDefault();
  let task = {
    title: taskTitle,
    type: taskPriority
  };
  tasks.push(task);
  renderElements(tasks);
})

