const buttonBtn = document.querySelector('#buttonBtn');


buttonBtn.addEventListener('click', (e) => {
  if (validate() !== 'valid') {
    e.preventDefault();
  }
});

function validate() {
  const emailInput = document.querySelector('#email');
  const invalid = (
    emailInput.value === ''
    || emailInput.value.indexOf('@') === -1
    || emailInput.value.indexOf('.') === -1
    || (emailInput.value.indexOf('.') - emailInput.value.indexOf('@')) === 1
  );

  if (invalid) {
    emailInput.classList.add('error');
    return 'invalid';
  } else {
    emailInput.classList.remove('error');
    return 'valid';
  }
}