// Função para calcular as porções com base no número de pessoas
function calcularPorcoes() {
  const pessoas = parseInt(document.getElementById('pessoas').value);
  const porcaoPorPessoa = 200; // Porção padrão de 200 gramas por pessoa
  const total = pessoas * porcaoPorPessoa;

  if (isNaN(pessoas) || pessoas <= 0) {
      document.getElementById('resultado').innerHTML = 'Por favor, insira um número válido de pessoas.';
  } else {
      document.getElementById('resultado').innerHTML = `Você precisará de aproximadamente ${total} gramas de comida.`;
  }
}

// Função para compartilhar dicas de reaproveitamento de alimentos
function compartilharDica() {
  const dica = document.getElementById('dica').value;
  
  if (dica.trim() !== "") {
      const dicasDiv = document.getElementById('dicas-compartilhadas');
      const novaDica = document.createElement('p');
      novaDica.textContent = dica;
      dicasDiv.appendChild(novaDica);
      document.getElementById('dica').value = "";  // Limpa o campo de texto após o envio
  } else {
      alert('Por favor, insira uma dica para compartilhar.');
  }
}
