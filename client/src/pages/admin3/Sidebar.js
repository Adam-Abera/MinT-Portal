import { Link } from 'react-router-dom';
import '../../images/assets/css/admin.css';
import { useLocation } from 'react-router-dom';

function Sidebar(props){
    const {email} = props;
    //console.log(email);
    return(
            <ul class="list-group text-center fs-5 display-6">
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin3/news/add-news" state={{email:email}}>
                  Post News{" "}
                </Link>
              </li>
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link className="links" to="/admin3/calls/add-call" state={{email:email}}>
                  Post Calls
                </Link>
              </li>
              <br />
              <li
                class="list-group-item  "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin3/publications/add-publication"
                  state={{email:email}}
                >
                  Post Publications
                </Link>
              </li>
              <br />
              <li
                class="list-group-item "
                style={{
                  backgroundColor: "#ffa525",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <Link
                  className="links"
                  to="/admin3/accepted-projects/add-accepted-project"
                  state={{email:email}}
                >
                  Post Accepted Projects
                </Link>
              </li>
              <br />
              <li class="list-group-item " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin3/institutes/post-to-institutes"
                  state={{email:email}}
                >
                  Post To Institutes
                </Link>
              </li>
              <br />
              <li class="list-group-item post-links " style={{backgroundColor: '#ffa525', border: 'none', borderRadius: '10px'}}>
                <Link
                  className="links"
                  to="/admin3/collaboration/post-to-collaboration"
                  state={{email:email}}
                >
                  Post To Collaborations
                </Link>
              </li>
              <br />
            </ul>
    );
}
export default Sidebar;