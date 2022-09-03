/** Advice/Todos
 * className ties a html block to css for styling, if you dont have styling you dont need it. (App.css)
 * The <ul> and <li> tags are for lists, uselly bulleted, they do nothing here.
 * A return block with multiple hmtl/jsx divs should really be in a (...).
 * I dont want to see functions look like this any more man, what a mess!!
 */

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="/">Home</a>
        <ul>
            <li>
                <a href="/alert">Alert</a>
            </li>
        </ul>



    </nav>
}