/** Advice/Todos
 * Once again wrap the block in parens 
 * Why are we doing <a> tags when we have a routing function?
 * If we use links this turns a single page app into multiple!
 * 
 */

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="/">Home</a>
            <a href="/ButtonPage">ButtonPage</a>
            <a href="/BasicTable">BasicTable</a>
            <a href="/guacc">Guacc</a>
            <a href="/howtobowl">HowToBowl</a>
        </nav>
    )
}