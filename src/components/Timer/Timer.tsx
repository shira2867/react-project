import { useEffect, useState } from "react"

interface CounterProps{
    myNumberStart:number
    parentFunc:()=>any
}
export function Timer(props:CounterProps){
    const [myNumber,setNumber]=useState(props.myNumberStart);
    const [idTimer,setIdTimer]=useState<any>();
   

    //כאשר הקומפוננטה עולה וכאשר הקומפוננטה מתעדכנת
   

    //נכנס לפונקציה כאשר הקומפוננטה עולה למסך ומעדכנת פעם ראשונה את הסטטי
    useEffect(()=>{
        

        let id= setInterval(()=>{
            setNumber((prev=>prev-1))
        },2000)
        setIdTimer(id);

        //כאשר הפעם הראשונה מתבצעת
        //כאשר הקומפוננטה נמחקת מהDOM
        return ()=>{
            clearInterval(id)
        }

    },[])

    // //אופציה שלישית לפונקציה כאשר מפרמטר בקומפוננטה משתנה
    useEffect(()=>{
        if(myNumber<=0){
            props.parentFunc();
            clearInterval(idTimer);
        }
    },[myNumber])
    
    return <div ><h1>{myNumber}</h1>
    </div>
}