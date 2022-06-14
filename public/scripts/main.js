const element = document.querySelector('form')

element.addEventListener('submit', event => {
  event.preventDefault()
  const textArea = document.getElementById('textarea').value
  if (!textArea.trim()) {
    return
  }
  const sendMessage = document.querySelector('#section')

  const messageContainer = document.createElement('div')

  messageContainer.className = 'message-container'

  sendMessage.appendChild(messageContainer)

  const userMessage = document.createElement('div')
  userMessage.className = 'message-user'

  messageContainer.appendChild(userMessage)

  const userWrapper = document.createElement('div')
  userWrapper.className = 'user-wrapper'

  userMessage.appendChild(userWrapper)

  const userImg = document.createElement('img')
  userImg.src = 'images/img/user 1.svg'

  userWrapper.appendChild(userImg)

  const userSend = document.createElement('p')

  userSend.className = 'alternative-text'

  userSend.innerHTML = textArea

  userWrapper.appendChild(userSend)

  const messageActions = document.createElement('div')

  messageActions.className = 'message-options'

  messageContainer.appendChild(messageActions)

  const frstButton = document.createElement('button')

  frstButton.className = 'alternative-text check'

  messageActions.appendChild(frstButton)

  const frstBtnImg = document.createElement('img')
  frstBtnImg.src = 'images/img/check 1.svg'

  frstButton.appendChild(frstBtnImg)

  const frstBtnAction = document.createElement('p')

  frstBtnAction.setAttribute('id', 'read')

  frstBtnAction.innerHTML = 'Marcar como lida'

  frstButton.appendChild(frstBtnAction)

  const scndButton = document.createElement('button')

  scndButton.className = 'alternative-text delete'

  messageActions.appendChild(scndButton)

  const scndBtnImg = document.createElement('img')

  scndBtnImg.src = 'images/img/trash 1.svg'

  scndButton.appendChild(scndBtnImg)

  const scndBtnAction = document.createElement('p')

  scndBtnAction.setAttribute('id', 'delete-modal')

  scndBtnAction.innerHTML = 'Excluir'

  scndButton.appendChild(scndBtnAction)

  document.getElementById('textarea').value = ''

  frstBtnAction.addEventListener('click', handleClick)

  scndButton.addEventListener('click', event => handleClick(event, false))
})

import Modal from './modal.js'

const openModal = document.querySelector('modal-container')
const modalWrapper = document.querySelectorAll('.modal-container .modal')
const checkBtns = document.querySelectorAll('.alternative-text.check')
const deleteBtn = document.querySelectorAll('.alternative-text.delete')
const cancel = document.querySelectorAll('#button-delete-cancel')
const modalTitle = document.querySelector('.modal h3')
const modalButton = document.querySelector('.btn-modal-2')
const modalDescription = document.querySelector('.modal p')
const form = document.querySelector('.modal form')

const modal = Modal()

/*form.addEventListener('submit', event => {
  event.preventDefault()
})*/

checkBtns.forEach(button => {
  button.addEventListener('click', handleClick)
})

deleteBtn.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('.input-copy #room-id').dataset.id
  const questionId = event.target.dataset.id

  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza de que deseja ${text.toLowerCase()} esta pergunta`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}
