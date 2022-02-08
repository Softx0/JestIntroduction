// una funcion asincrona ya que tengo un tiempo de delay
const getQuoteCallback = (cb) => { 
    setTimeout(() => cb("No creas todo lo que vez en internet, por Benjamin"), 1000);   
}

const getQuotePromises = () => { 
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("No creas todo lo que vez en internet, por Benjamin");
        }, 1000);  
    })
}


export {
    getQuoteCallback,
    getQuotePromises,
}