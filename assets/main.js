function switchTab(tabIndex) {
  document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active-tab');
  });
  
  document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active-tab');
  });
    
  document.querySelectorAll('.tab')[tabIndex].classList.add('active-tab');
  document.getElementById(`tab-content${tabIndex}`).classList.add('active-tab');
}

// This is for special cases like Table 7 and Table 14
function switchOption(optionIndex) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active-tab');
    });
    
    document.querySelectorAll('.option-content').forEach(content => {
        content.classList.remove('active-option');
    });

    document.querySelectorAll('.tab')[optionIndex].classList.add('active-tab');
    document.querySelectorAll('.option-content')[optionIndex].classList.add('active-option');
    document.getElementById(`content${optionIndex}`).classList.add('active-option');
}
