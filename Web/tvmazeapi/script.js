const form  = document.querySelector('#searchForm')
const image  = document.querySelector('#inpimages')
const photo  = document.querySelector('img')
const btn = document.querySelector('button')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    dataquery()
})

const addImages = (shows)=>{
    for (result of shows){
        const img = result.show.image;
        if (img){
            const imgcon = document.createElement('img');
            imgcon.src = img.medium
            image.append(imgcon)
        }
    }
}


const dataquery = async ()=>{
    const inpValue = form.elements.query.value
    console.log(inpValue)
    const query = await axios.get(`https://api.tvmaze.com/search/shows?q=${inpValue}`)
    const data = query.data
    console.log(data)
    image.innerHTML = ''
    addImages(data)
    form.elements.query.value = '';
}





