function switchTab(tabIndex) {
  document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active-tab');
  });
  
  document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active-tab');
  });
    
  document.querySelectorAll('.tab')[tabIndex].classList.add('active-tab');
  document.getElementById(`tab-content${tabIndex}`).classList.add('active-tab');
  console.log("TAB INDEX", tabIndex)
}

// This is for special cases like Table 7 and Table 14
function switchOption(optionIndex) {

    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active-option');
    });
    
    document.querySelectorAll('.option-content').forEach(content => {
        content.classList.remove('active-option');
    });

    document.querySelectorAll('.tab-button')[optionIndex].classList.add('active-option');
    document.querySelectorAll('.option-content')[optionIndex].classList.add('active-option');
    document.getElementById(`option-content${optionIndex}`).classList.add('active-option');
    console.log("OPTION INDEX", optionIndex)
}

function switchTable1Tab(tabIndex) {
  document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active-tab');
  });
  
  document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active-tab');
  });
    
  document.querySelectorAll('.tab')[tabIndex].classList.add('active-tab');
  document.getElementById(`tab-content${tabIndex}`).classList.add('active-tab');
  console.log("TAB INDEX", tabIndex)
}

function switchTable2Tab(tabIndex) {
    document.querySelectorAll('.tab2').forEach(tab => {
        tab.classList.remove('active-tab');
    })
    
    document.querySelectorAll('.tab2-content').forEach(content => {
        content.classList.remove('active-tab');
    });

    document.querySelectorAll('.tab2')[tabIndex].classList.add('active-tab');
    document.querySelectorAll('.tab2-content')[tabIndex].classList.add('active-tab');
    console.log("TAB INDEX", tabIndex)
}

function switchTable3Tab(tabIndex) {
  document.querySelectorAll('.tab3').forEach(tab => {
      tab.classList.remove('active-tab');
  })
  
  document.querySelectorAll('.tab3-content').forEach(content => {
      content.classList.remove('active-tab');
  });

  document.querySelectorAll('.tab3')[tabIndex].classList.add('active-tab');
  document.querySelectorAll('.tab3-content')[tabIndex].classList.add('active-tab');
  console.log("TAB INDEX", tabIndex)
}

// For Dropdown Togglers
function toggleItem(clickedTitle) {
    const itemContent = clickedTitle.nextElementSibling;
    
    itemContent.classList.toggle('active');

    const chevronDown = clickedTitle.querySelector('.chevron-down');
    chevronDown.classList.toggle('active');
}
