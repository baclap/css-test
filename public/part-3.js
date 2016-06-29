(function() {
    var inputNodes = document.querySelectorAll('.form-field input')
    for (var i = 0; i < inputNodes.length; i++) {
        var inputNode = inputNodes[i]
        bindListeners(inputNode)
    }

    function bindListeners(inputNode) {
        inputNode.addEventListener('focus', function() {
            inputNode.parentNode.classList.add('focused')
        })
        inputNode.addEventListener('blur', function() {
            inputNode.parentNode.classList.remove('focused')
        })
    }
})()
