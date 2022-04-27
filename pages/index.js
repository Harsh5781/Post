import Link from "next/link"
import fetch from 'isomorphic-unfetch'


const Index = ({notes})=>{
    return (
        <div>
            <div>
            <form action="/api/post" method="post" className="form"> 
                {/* <input type="text" name="text" placeholder="Post your thoughts" maxLength={120} className="box"/> */}
                <textarea name="text" cols="30" rows="5" placeholder="Post your thoughts" className="box"></textarea>
                <button>Send</button>
                
            </form>
            </div>
            <div className="posts">
                {notes.map(home=>{return (<div>
                    
                    <div className="post">{home.text}</div>
                    </div>)
                })}
            </div>
        </div>
    )

}

Index.getInitialProps = async ()=>{
    const res = await fetch('http://localhost:3000/api/post')
    const {data} =await res.json()
    return {notes : data}
}

export default Index