import React , { useState , useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';

const CardTitleBody = () => {
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .then(setIsLoading(false))
    },[]);

    console.log(data)
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap',
            minHeight:'100vh'}}
        >
            {
            isLoading ? (<CircularProgress />) :
            data.map((e)=>(
                <Card 
                    key={e?.id} 
                    sx={{
                        maxWidth:'400px',
                        p:"20px",
                        minHeight:"250px",
                        m:'20px',
                        display:"inline-block"
                        }} 
                    >
                    <Typography variant="h5" gutterBottom component="div">
                        {e?.title}
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="body1" gutterBottom>
                        {e?.body}
                    </Typography>
                </Card>
            ))}
        </div>
    )
}

export default CardTitleBody
