import articles from '../data/articles.json';
import './Sidebar.css';


function Sidebar() {
    return (
      <div className="Sidebar">
        <nav>
          <ul>
            {articles.map(item=>
              <li key={item.href}>
                <a href={item.href}>{item.title}</a>
              </li>
            )}
          </ul>
        </nav>  
      </div>
    );
  }
  
  export default Sidebar;