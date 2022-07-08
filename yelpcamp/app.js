const express = require('express')
const app = express()
const path = require('path')
const Campground = require('./models/campground')
const methodoverride = require('method-override')
const mongoose = require('mongoose')
const engine = require('ejs-mate')



const DB = "mongodb+srv://chiragbangera:chiragadarsh@cluster1.c3lu4j0.mongodb.net/yelpcamp?retryWrites=true&w=majority"
mongoose.connect(DB,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Database Connected')
    })
    .catch((e)=>{
        console.log('MongoDB Not Connected')
        console.log(e)
    })

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodoverride('_method'))
app.engine('ejs',engine)







// dummy route
app.get('/',(req,res)=>{
    res.render('home');
})

// Campground page
app.get('/campgrounds',async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
})

// new Camp
app.get('/campgrounds/newcamp',(req,res)=>{
    res.render('campgrounds/new');
})

// new camp post
app.post('/campgrounds',async (req,res)=>{
    const newCamp = new Campground(req.body)
    await newCamp.save()
    res.redirect(`/campgrounds/${newCamp._id}`)
})

// campground show route
app.get('/campgrounds/:id',async (req,res)=>{
    const {id} = req.params
    const camp = await Campground.findById(id)
    res.render('campgrounds/show',{camp})
})

// edit page route
app.get('/campgrounds/:id/editcamp',async (req,res)=>{
    const {id} = req.params;
    const findCamp = await Campground.findById(id)
    res.render('campgrounds/editcamp',{findCamp})
})

// Updating the camp
app.patch('/campgrounds/:id',async(req,res)=>{
    const {id} = req.params;
    const updatedCamp = req.body;
    await Campground.findByIdAndUpdate(id,updatedCamp)
    res.redirect(`/campgrounds/${id}`)
})

// deleting camp
app.delete('/campgrounds/:id',async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
})




const port = 4000
app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})
