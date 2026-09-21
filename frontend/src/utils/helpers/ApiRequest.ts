import axios from "axios";

export class ApiRequests{

    static async post(data:any,link:string) {
        let response = {}

        await axios.post(link,data,{
            headers:{
                "Content-Type": "application/json",
            }
        }).then((r:any)=>{
            response = r.data
        })

        return response
    }
}
