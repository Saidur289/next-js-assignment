export default async function getAllBlog(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    if(!result.ok){
        throw new Error('There was an error on fetching')
    }
    return result.json()
}