import Algerie from './Algerie'
// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = [{"url" : 'Algerie/informatique/Composants_pc?query=AMD-Ryzen-5-5600X'},
  {"url" : 'Algerie/informatique/Composants_pc?query=AMD-Ryzen-7-5800X'}]
  
    // Get the paths we want to pre-render based on posts
    const paths= [
        { params: { variable: ["Algerie/informatique/Composants_pc?query=AMD-Ryzen-7-5800X"] } },
    ]
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
export default Algerie
