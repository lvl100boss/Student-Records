document.querySelectorAll('.dropdown-content a').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.dropbtn').textContent = event.target.textContent;
    document.getElementById('selectedOption').value = event.target.getAttribute('data-value');
    document.querySelector('.dropdown-content').style.display = 'none';
  });
});

document.querySelectorAll('.dropdown-content2 a').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.dropbtn2').textContent = event.target.textContent;
    document.getElementById('selectedOption2').value = event.target.getAttribute('data-value');
    document.querySelector('.dropdown-content2').style.display = 'none';
  });
});

