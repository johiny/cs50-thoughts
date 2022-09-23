const fakeAxiosPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rng = Math.floor(Math.random() * 10)
            if(rng > 4)
            {
                reject('Error Terrible!')
            }
            else{
                resolve('Thought Created!')
            }
        }, 4000)
    })
}

export default fakeAxiosPost