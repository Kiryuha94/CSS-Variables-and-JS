const inputs = document.querySelectorAll('.controls input');
const correctFilter = (el) => {
  const size = el.target.dataset.sizing || '';
  const dataName = `--${el.target.name}`;
  const dataValue = el.target.value;
  document.documentElement.style.setProperty(dataName, `${dataValue}${size}`);
}

inputs.forEach((input) => input.addEventListener('change', correctFilter));
inputs.forEach((input) => input.addEventListener('mousemove', correctFilter));
