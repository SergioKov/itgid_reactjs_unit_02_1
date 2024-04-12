import articles from '../data/articles.json';
import './Main.css';

function Main() {
    return (
      <div className="Main">
        { /* jsx */}

        {articles.map(item => 
            <section>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
                <p>{item.href}</p>
            </section>
        
        )}
        
  
      </div>
    );
  }
  
  export default Main;