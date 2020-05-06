module.exports = {
    word : /^([a-z]|[A-Z]){1,30}$/,
    words : /^([a-z]|[A-Z]| ){1,100}$/,
    num_word : /^([a-z]|[A-Z]|[0-9]){1,30}$/,
    num_words : /^([a-z]|[A-Z]|[0-9]| ){1,100}$/,
    sentence : /^([a-z]|[A-Z]| |[0-9]|\r|\n|-|_|,|\.){1,100}$/,
    number : /^[0-9]{1,10}$/
}