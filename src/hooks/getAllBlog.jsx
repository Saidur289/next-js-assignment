export default async function getAllBlog(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    return result.json()
}