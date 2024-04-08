export default function BlogList({data}){


function handleDelete(id){
    fetch("http://localhost:8000/data/" + id, {method: 'DELETE'})
    .then(response => {
        if(!response.ok){
            throw new Error("Something's wrong")
        }
        console.log("deleted")
        location.reload()
    })
    .catch(error => {console.error("A problem?!")})
}


    return ( 
        <div className="blog-home">
        {data && data.map((item, index) => <div className="blog-list" key={index}>
            <h2>{item.input.title}</h2>
            <p>Written by {item.input.author}</p>
            <p>{item.input.text}</p>
            <button onClick={()=> handleDelete(item.id)}>Delete</button>
            </div>
        )}
        </div>
    )
}