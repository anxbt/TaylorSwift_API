const app =require('express')();

const PORT=8080


const Broken_relationships = [
    {
        name: 'Drew Hardwick',
        date: '2006-2007',
        info: "She was inspired to write Teardrops on My Guitar about her experience with him", 
        image: 'https://ilarge.lisimg.com/image/7764313/740full-drew-chadwick-photo.jpg'
    },
    {
        name: 'Joe Jonas',
        date: '2008',
        info:"Broke up over the phone for 27 secs. Inspired Forever & Always & Last Kiss",
        image: 'https://th.bing.com/th/id/OIP.f8AJ3uqZhSCHIqTeTbuYLAHaLH?pid=ImgDet&rs=1'
    },
    {
        name: 'Taylor Lautner',
        date: '2009',
        info:"After the breakup they became good friends and went out a few times",
        image: 'https://th.bing.com/th/id/OIP.DOACCtox6FAu6w9N1d6U6AHaIh?pid=ImgDet&rs=1'
    },
    {
        name: 'Lucas Till',
        date: '2009',
        info:"The two dated shortly and quickly broke up and Lucas said that he liked her as a friend",
        image: 'https://th.bing.com/th/id/OIP.Ga-cKbaA15tDA8TDoDeyRwHaKx?pid=ImgDet&rs=1'
    },
    {
        name: 'John Mayer',
        date: '2009-2010',
        info:"their age gap caused quite a controversy. Swift was only 19 at the time, while Mayer was 32 ",
        image: 'https://th.bing.com/th/id/OIP.kgabSF9tKmGhIzsS5ZTzhgHaHa?pid=ImgDet&rs=1'
    },
    {
        name: 'Cory Monteith',
        date: '2010',
        info:"Monteith is reportedly the inspiration behind Swift's song 'Mine'",
        image: 'https://th.bing.com/th/id/OIP.xDWjuj6rvlXnfXfuxrNzygHaLK?pid=ImgDet&rs=1'
    },
    {
        name: 'Jake Gyllenhaal',
        date: '2010',
        info:" The two dated briefly for three months in 2010 between October and December. And in November 2021, following the release of Red (Taylor's version), Gyllenhaal said he was flooded with negative comments.  But in the Esquire interview, he did address the rumors. 'It has nothing to do with me. It's about her relationship with her fans,' he said.",
        image: 'https://www.lofficielusa.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F39109%2F1619111421-jake-gylenhaal.jpeg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1920&q=75'
    },
    {
        name: 'Conor Kennedy',
        date: '2012',
        info:" From sweet pictures of them kissing to pictures of the two visiting Kennedy's mother's grave, the two were spotted multiple times together for the couple of months. But by the end of October, the pair was no more.",
        image: 'https://th.bing.com/th/id/OIP.TP2kiIvnr6OsOEDgvRGi9wHaLI?pid=ImgDet&rs=1'
    },
    {
        name: 'Harry Styles',
        date: '2012-2013',
        info:"They dated for a short period of time. Currently they have no issues and they are friends",
        image: 'https://th.bing.com/th/id/OIP.cl7XCuQgHqAQ8wL7mTn2KgHaLJ?pid=ImgDet&rs=1'
    },
    {
        name: 'Calvin Harris',
        date: '2015-2016',
        info:"The two first met at the Elle Style Awards in 2015 (there's even a photo of the moment they met) and quickly hit it off. After around 15 months of dating, the two ended things in July 2016, and things got ugly when Harris went on a rant on Twitter. ",
        image: 'https://www.nme.com/wp-content/uploads/2018/11/calvin-harris-GettyImages-922502210.jpg'
    },
    {
        name: 'Tom Hiddleston',
        date: '2016',
        info:"It is speculated that Swift's 'Getaway Car' was inspired by Hiddleston helping her end her relationship with Harris. ",
        image: 'https://th.bing.com/th/id/OIP.RLNgzR2SlOP2aNVlFx5B4QHaIu?pid=ImgDet&rs=1'
    },
    {
        name: 'Joe Alwyn',
        date: '2016-2023',
        info:"In April 2023 the pair had broken up. According to Entertainment Tonight, a source explained, 'it was not dramatic,' and that, 'the relationship had just run its course. It's why [Alwyn] hasn't been spotted at any shows.'",
        image: 'https://th.bing.com/th/id/OIP.JTPPCZtlHI9thWEbJBSKXwHaLH?pid=ImgDet&rs=1'
    },



]
app.listen(
    PORT,
    ()=>console.log(`Server is running on port ${PORT}`)
);

app.get('/taylor',(req, res)=> {
    res.send(Broken_relationships)
  
    
})