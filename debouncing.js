/**
 * Debouncing method call when cost consuming method called on freqently occured events
 * to make the const consuming method called on a certain delay between two consecutive events
 * @param {Function} event function to be called
 * @param {Delay in ms} delay delay between two events after which method should be called
 * @returns Function to be registered as callback on events
 */
function debouncing(event, delay) {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            event.apply(context, args);
        }, delay);
    }
}
