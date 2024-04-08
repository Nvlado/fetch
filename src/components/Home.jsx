import BlogList from "./BlogList";
import { useFetch } from "./useFetch"

export default function Home(){

const {data} = useFetch('http://localhost:8000/data/')


    return (
        <div>
            {data && <BlogList data={data} />}
        </div>
        )
}