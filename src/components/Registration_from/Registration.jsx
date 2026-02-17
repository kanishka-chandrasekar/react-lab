
export default function Registration() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); 

function handleform (){
    if(!name.trim()){
        console.log("fill name")
        return;
        }
    if(!email.trim()){
        console.log("fill email")
        return;
    }
    if(!password.trim()){
        console.log("fill password")
        return;
    }
        setsubmitteddata({name, email, password})
        setName("");
        setEmail("");
        setPassword("");
}
return (
<>
<div>
    <h1>Registration Form </h1>
    <label > name </label>
    <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
    <label > email </label>
    <input type="text" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
    <label > password </label>
    <input type="text" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br /><br />
    <button > submit </button>
</div>
</>
)
}