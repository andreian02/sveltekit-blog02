export async function get() {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await request.json()


    console.log(posts);

    if (posts) {
        return {
            body: { posts },
        };
    }

    return {
        status: 404,
    };
}