const form  = document.querySelector('#searchForm')
form.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const inpValue = form.elements.query.value
    console.log(inpValue)
    const query = await axios.get(`https://api.tvmaze.com/search/shows?q=${inpValue}`)
    const data = query.data
    console.log(data) 
    addImages(data)
    form.elements.query.value = '';
})

const addImages = (shows)=>{
    for (result of shows){
        const img = result.show.image;
        if (img){
            const imgcon = document.createElement('img');
            imgcon.src = img.medium
            document.body.append(imgcon)
        }
    }
}

