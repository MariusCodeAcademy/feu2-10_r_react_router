import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { usersData } from '../../App';

function SingleUser(props) {
  const history = useHistory();
  // gauti id to userio kurio informacija norim atvaizuot
  const { userId } = useParams();
  console.log('userId ===', userId);
  console.log('usersData ===', usersData);

  const [currentUser, setCurrentUser] = useState(
    usersData.find((uObj) => uObj.id === userId)
  );

  function goBack() {
    // programine navigacija
    // window.location.href = '/users' vanila js
    history.push('/users');
  }

  return (
    <div>
      <div className='card'>
        <h1>{currentUser.name}</h1>
        <h4>age is {currentUser.age}</h4>
        <p>
          {currentUser.name} lives in {currentUser.town}
        </p>
      </div>
      <button onClick={goBack}> Go Back To Users</button>
    </div>
  );
}
export default SingleUser;
