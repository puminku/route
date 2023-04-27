import { useLocation, useParams } from "react-router-dom";

export default function Posts(){
    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const name=urlstring.get("name");
    const surname=urlstring.get("surname");
    if(id ){
        return (<>id : {id} Not found</>);
    }
    if(id == 1 ){
        return (<>id : {id} iPhone 13</>);
    }
    if(id == 2 ){
        return (<>id : {id} iPhone 14</>);
    }
    if(name && surname ){
        return (<>Hello {name} {surname}, How are you?</>);
    }

    return (<>
        iPhone 13 <br/>
        iPhone 14 <br/>
    </>);
}