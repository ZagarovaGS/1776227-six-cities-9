import { Link } from 'react-router-dom';
import './notFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__title"><Link to='/'>Перейти на главную</Link></p><br />
      <img className="not-found__img" src="https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png" />
    </div>
  );
}
export default NotFound;
