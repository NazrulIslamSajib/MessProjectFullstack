const app=require('./app');

PORT=process.env.PORT || 3000 ;



app.listen(PORT,()=>{
    console.log(`Your server is running at http://localhost:${PORT}`);
})