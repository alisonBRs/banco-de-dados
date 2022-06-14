export default function Modal() {
  const elementModal = document.querySelector('.modal-container')
  const cancelBtn = document.querySelector('.button.btn-modal-1')
  cancelBtn.addEventListener('click', close)

  function open() {
    elementModal.classList.add('modal-on')
  }
  function close() {
    elementModal.classList.remove('modal-on')
  }

  return {
    open: open,
    close: close
  }
}
