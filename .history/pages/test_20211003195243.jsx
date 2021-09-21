
// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = [{"url" : 'Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'},
  {"url" : 'Algerie/informatique/Composants_pc?query=AMD-Ryzen-7-5800X'}]
  
    // Get the paths we want to pre-render based on posts
    const paths= [
        { params: { Algerie: ["/Algerie/informatique/Composants_pc?query=AMD-Ryzen-7-5800X"] } },
    ]
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
  }

export async function getStaticProps({ params }) {
// params contains the post `id`.
// If the route is like /posts/1, then params.id is 1
const res = await fetch(`http://localhost:3000/${params.Algerie}`)
const post = await res.json()

// Pass post data to the page via props
return { props: { post } }
}


function About() {
    return 
    
  }
  
  export default About


