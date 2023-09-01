const app =require('express')();

const PORT=8080


const Broken_relationships = [
    {
        name: 'Drew Hardwick',
        date: '2006-2007',
        info: "She was inspired to write Teardrops on My Guitar about her experience with him", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Drew_Hardwick_2012.jpg/220px-Drew_Hardwick_2012.jpg",
    },
    {
        name: "Joe Jonas",
        date: "2008",
        info: "Broke up over the phone for 27 secs. Inspired Forever & Always & Last Kiss",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Drew_Hardwick_2012.jpg/220px-Drew_Hardwick_2012.jpg",
  },
  {
        name: "Taylor Lautner",
        date: "2009-2010",
        info: "Twilight actor. They met on the set of Valentine's Day and dated for about a year.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Taylor_Lautner_2018.jpg/220px-Taylor_Lautner_2018.jpg",
  },
  {
        name: "Cory Monteith",
        date: "2010",
        info: "Glee actor. They met at the 2010 Grammy Awards and dated for about 6 months.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Cory_Monteith_2011.jpg/220px-Cory_Monteith_2011.jpg",
  },
  {
        name: "John Mayer",
        date: "2010",
        info: "Singer-songwriter. They were known for their 'on-and-off' relationship.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/John_Mayer_2016.jpg/220px-John_Mayer_2016.jpg",
  },
  {
        name: "Jake Gyllenhaal",
        date: "2010-2011",
        info: "Actor. They were rumored to have met at the Met Gala and dated for about 3 months.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jake_Gyllenhaal_2018.jpg/220px-Jake_Gyllenhaal_2018.jpg",
  },
  {
        name: "Harry Styles",
        date: "2012-2013",
        info: "One Direction member. They were known for their short-lived relationship, which inspired Swift's song 'Style'",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Harry_Styles_2019.jpg/220px-Harry_Styles_2019.jpg",
  },
  {
        name: "Calvin Harris",
        date: "2015-2016",
        info: "Scottish DJ. They broke up after 15 months, with Swift reportedly writing songs about Harris in her album 'Reputation'",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Calvin_Harris_2016.jpg/220px-Calvin_Harris_2016.jpg",
  },
  {
        name: "Tom Hiddleston",
        date: "2016",
        info: "British actor. They were known for their whirlwind romance, which inspired Swift's song 'Getaway Car'",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tom_Hiddleston_2019.jpg/220px-Tom_Hiddleston_2019",
    },


    
]
app.listen(
    PORT,
    ()=>console.log(`Server is running on port ${PORT}`)
);

app.get('/taylor',(req, res)=> {
    res.send(Broken_relationships)
  
    
})


