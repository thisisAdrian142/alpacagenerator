var categoryOptions = {
    'ear': ['Default', 'Tilt Backward', 'Tilt Forward'],
    'hair': ['Default', 'bang', 'Curls', 'Elegant', 'Fancy', 'Short']
};

function updateOptions(category) {
    var optionContainer = document.getElementById('options-container');
    optionContainer.innerHTML = '';

    var options = categoryOptions[category];

    for (var i = 0; i <options.length; i++) {
        var optionButton = document.createElement('button');
        optionButton.textContent = options[i];
        optionButton.addEventListener('click', function() {
            document.getElementById('alpaca-image').src = category + '-' + this.textContent + '.png';
        });
        optionsContainer.appendChild(optionButton);
    }
}

// Next, we get all the category buttons and add a click event to them
var categoryButtons = document.getElementById('category-buttons').getElementsByTagName('button');
for (var i = 0; i < categoryButtons.length; i++) {
  categoryButtons[i].addEventListener('click', function() {
    // When a category button is clicked, call updateOptions with the category
    updateOptions(this.getAttribute('data-category'));
  });
}