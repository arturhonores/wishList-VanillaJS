window.addEventListener('load', () => {
  //referenciando elementos del DOM
  const formCrear = document.getElementById('form-crear')
  const listaPropo = document.getElementById('lista-propo')
  const inputCrear = document.getElementById('crear')
  contarPropos()

  function contarPropos() {
    const counter1 = document.querySelectorAll('#lista-propo li').length
    const contador1 = document.querySelector(".contador1")
    const counter2 = document.querySelectorAll('#lista-propo2 li').length
    const contador2 = document.querySelector(".contador2")
    contador1.innerHTML = counter1
    contador2.innerHTML = counter2
  }

  formCrear.addEventListener('submit', (e) => {
    e.preventDefault()
    capturarValor()
    contarPropos()
  })

  const capturarValor = () => {
    const propoNombre = inputCrear.value.trim();
    (propoNombre.length) ? mostrarPropoHtml(propoNombre) : alert('Debes ingresar un propósito')
  }

  const mostrarPropoHtml = (propo) => {
    const liHtml = `<li>${propo}<i class="fa-solid fa-circle-xmark borrar"></i><i
class="fa-sharp fa-solid fa-circle-check confirmar"></i></li>`
    listaPropo.innerHTML += liHtml
  }

  //función borrar
  listaPropo.addEventListener('click', (e) => {
    if (e.target.classList.contains('borrar')) {
      e.target.parentElement.remove()
    }
    contarPropos()
  })

  //confirmar propósitos
  listaPropo.addEventListener('click', (e) => {
    if (e.target.classList.contains('confirmar')) {
      e.target.parentElement.remove()
      const propoConfirmado = e.target.parentElement.innerText
      const listaConfirmada = document.getElementById("lista-propo2")
      const nuevaPropo = `<li>${propoConfirmado}</li>`
      listaConfirmada.innerHTML += nuevaPropo

      contarPropos()
    }
  })


})