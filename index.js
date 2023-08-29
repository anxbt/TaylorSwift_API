const app =require('express')();

const PORT=8080


const Broken_relationships = [
    {
        name: 'Drew Hardwick',
        date: '2006-2007',
        info: "She was inspired to write Teardrops on My Guitar about her experience with him", 
        image: 'URL to Drew Hardwick image'
    },
    {
        name: 'Joe Jonas',
        date: '2008',
        info:"Broke up over the phone for 27 secs. Inspired Forever & Always & Last Kiss",
        image: 'URL to Joe Jonas image'
    }

    // Add more entries for other relationships
]
app.listen(
    PORT,
    ()=>console.log(`Server is running on port ${PORT}`)
);

app.get('/taylor',(req, res)=> {
    res.send(Broken_relationships)
  
    
})