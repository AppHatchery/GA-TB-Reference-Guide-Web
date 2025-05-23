// function to handle tab switching for any table
function activateTab(tableContainer, tabIndex) {
    if (!tableContainer) return;


    tableContainer.querySelectorAll('.tab-button, .tab, .tab2, .tab3').forEach(tab => {
        tab.classList.remove('active-option', 'active-tab');
    });
    
    tableContainer.querySelectorAll('.option-content, .tab-content, .tab2-content, .tab3-content').forEach(content => {
        content.classList.remove('active-option', 'active-tab');
    });

    // Add active class to selected tab and content
    const selectedTab = tableContainer.querySelectorAll('.tab-button, .tab, .tab2, .tab3')[tabIndex];
    const selectedContent = tableContainer.querySelectorAll('.option-content, .tab-content, .tab2-content, .tab3-content')[tabIndex];
    
    if (selectedTab) {
        if (selectedTab.classList.contains('tab')) {
            selectedTab.classList.add('active-tab');
        } else if (selectedTab.classList.contains('tab-button')) {
            selectedTab.classList.add('active-option');
        } else if (selectedTab.classList.contains('tab2')) {
            selectedTab.classList.add('active-tab');
        } else if (selectedTab.classList.contains('tab3')) {
            selectedTab.classList.add('active-tab');
        }
    }
    
    if (selectedContent) {
        if (selectedContent.classList.contains('tab-content')) {
            selectedContent.classList.add('active-tab');
        } else if (selectedContent.classList.contains('option-content')) {
            selectedContent.classList.add('active-option');
        } else if (selectedContent.classList.contains('tab2-content')) {
            selectedContent.classList.add('active-tab');
        } else if (selectedContent.classList.contains('tab3-content')) {
            selectedContent.classList.add('active-tab');
        }
    }
}

// Function to handle tab switching with event
function handleTabSwitch(event, tabIndex) {
    // Get the clicked button from the event
    const clickedButton = event.currentTarget;
    
    const tableContainer = clickedButton.closest('.uk-overflow-auto');
    if (!tableContainer) return;

    // Get all tab buttons in this container
    const tabButtons = tableContainer.querySelectorAll('.tab-button, .tab, .tab2, .tab3');
    
    // Find the index of the clicked button within its container
    const clickedIndex = Array.from(tabButtons).indexOf(clickedButton);
    
    // Generate a unique ID for the container if it doesn't have one
    if (!tableContainer.id) {
        tableContainer.id = 'table-' + Math.random().toString(36).substr(2, 9);
    }
    
    // Switch to the correct tab
    activateTab(tableContainer, clickedIndex);
}

function switchOption(tabIndex, event) {
    handleTabSwitch(event, tabIndex);
}

// For backward compatibility
function switchTab(tabIndex, event) {
    if (event) {
        handleTabSwitch(event, tabIndex);
    } else if (window.event) {
        // Fallback 
        handleTabSwitch(window.event, tabIndex);
    }
}

function switchTable1Tab(tabIndex) {
    const tableContainer = document.getElementById('table_4_recommendations_for_regimens_to_treat_latent_tuberculosis_infection');
    if (tableContainer) {
        activateTab(tableContainer, tabIndex);
    }
}

function switchTable2Tab(tabIndex) {
    const tableContainer = document.getElementById('table_5_dosages_for_recommended_lbti_treatment_regimens');
    if (tableContainer) {
        activateTab(tableContainer, tabIndex);
    }
}

function switchTable3Tab(tabIndex) {
    const tableContainer = document.getElementById('table_6_ltbi_treatment_drug_adverse_reactions');
    if (tableContainer) {
        activateTab(tableContainer, tabIndex);
    }
}