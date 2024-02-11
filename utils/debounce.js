export const debounce = (cb, delay) => {
    let timeoutId;

    return function(...args) {
        if(timeoutId) {
            console.log('resetting the timers');
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        timeoutId = setTimeout(()=> {
            cb.apply(this, args);
        }, delay);
    }
}