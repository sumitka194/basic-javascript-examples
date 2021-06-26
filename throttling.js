/**
 * Throttling is used to restrict the cost consuming events to be called on frequently occured events
 * instead call on a definite interval while event is occuring
 * @param {Function} event event to be registered
 * @param {Time in ms} delay Delay between two event callback execution
 * @returns event function to be registered
 */
function throttling(event, delay) {
    let flag = true;
    return function () {
        const context = this;
        const args = arguments;
        if (flag) {
            event.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}