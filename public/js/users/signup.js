function validateConfirmData(data, dElementError, messageError) {
  if (data[0].value === data[1].value) {
    return true;
  }

  dElementError.textContent = messageError;
  dElementError.classList.remove('d-none');
  return false;
}


document.querySelector('.jsSignUpForm').addEventListener('submit', event => {
  console.log('123');
  event.preventDefault();
  const dElementEmailError = document.querySelector('.jsEmailError');
  const dElementPasswordError = document.querySelector('.jsPasswordError');
  const dEmails = document.querySelectorAll('input[data-type="email"]');
  const dPasswords = document.querySelectorAll('input[data-type="password"]');
  dElementEmailError.classList.add('d-none');
  dElementPasswordError.classList.add('d-none');
  const confirmarCorreos = validateConfirmData(
    dEmails,
    dElementEmailError,
    'Los correos ingresados no son iguales'
  );
  const confimarContrasenas = validateConfirmData(
    dPasswords,
    dElementPasswordError,
    'Las contrasenas ingresadas no son iguales'
  );
  if (
    !confirmarCorreos ||
    !confimarContrasenas
  ) {
    return;
  }

  event.target.submit();
});
