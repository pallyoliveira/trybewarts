// 3
const login = document.getElementById('input-login');
const senha = document.getElementById('input-senha');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
  // O click no botão de login dispara um alert com o texto "Login ou senha inválidos", no caso de erro de preenchimento dos dados
  if (login.value !== 'trybe@teste.com' && senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    // O click no botão de login dispara um alert com o texto "Olá, Tryber!", no caso de preenchimento correto dos dados.
    alert('Olá, Tryber!');
  }
});

// 18. Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada
const btnSubmit = document.getElementById('submit-btn');
const check = document.getElementById('agreement');

check.addEventListener('click', () => {
  // O botão torna-se habilitado, ao marcar o campo com id agreement
  if (check.checked === true) { // input checkbox checked property - w3schools
    // a propriedade checked define ou retorna o estado marcado de uma caixa de seleção
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled');
  }
});

// 20 - O preenchimento do campo de textarea altera o número apresentado no elemento #counter
const area = document.getElementById('textarea');
const counter = document.getElementById('counter');
area.addEventListener('input', () => { // o input evento dispara sempre que o valor muda.
  const num = area.value.length;
  counter.innerHTML = `${500 - num} caracteres disponíveis`;
  //  contador deverá decrementar a medida que algo for escrito no campo textarea
});

// 21. Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas
// Obtive ajuda do colega (grande mestre): Marcello Alves (T14A) na resolução dessa questão
function qualMateria() { // várias matérias podem ser  selecionadas por ser um checkbox, por isso a divergência em comparação as funções abaixo;
  const mat = document.getElementsByClassName('subject');
  let total = ''; // é uma string
  for (let index = 0; index < mat.length; index += 1) {
    if (mat[index].checked) { // checked já é true/false
      total += `${mat[index].value}, `; // armazenando cada valor com checked
    }
  }
  return total;
}

function qualFam() {
  const fami = document.getElementsByName('family');
  for (let index = 0; index < fami.length; index += 1) {
    if (fami[index].checked) { // checked já é true/false
      return fami[index].value;
    }
  }
}

function qualAval() {
  const aval = document.getElementsByName('rate');
  for (let index = 0; index < aval.length; index += 1) {
    if (aval[index].checked) { // checked já é true/false
      return aval[index].value;
    }
  }
}

btnSubmit.addEventListener('click', () => {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const form = document.getElementById('evaluation-form');
  const materia = qualMateria();
  const familia = qualFam();
  const avaliacao = qualAval();

  // Ao clicar no botão de enviar, existe um texto no formato Nome: -Nome- -Sobrenome-
  // Ao clicar no botão de enviar, existe um texto no formato Email: -Email-
  form.innerHTML = `Nome: ${nome} ${sobrenome} <br> Email: ${email} <br> Casa: ${casa} <br>`;
  //   Ao clicar no botão de enviar, existe um texto no formato Família: -Família-
  // Ao clicar no botão de enviar, existe um texto no formato Matérias: -Matérias Selecionadas-
  // Ao clicar no botão de enviar, existe um texto no formato Avaliação: -Avaliação-
  form.innerHTML += `Família: ${familia} <br> Matérias: ${materia} <br> Avaliação: ${avaliacao}`;
  // Ao clicar no botão de enviar, existe um texto no formato Observações: -Observações-
  form.innerHTML += `Observações: ${area.value} <br>`;
});
