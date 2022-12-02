import { useParams } from 'react-router-dom';

function SingleUser(props) {
  // gauti id to userio kurio informacija norim atvaizuot
  const params = useParams();
  console.log('params ===', params);

  return (
    <div>
      <div className='card'>
        <h1>James Band</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
          ad. Vitae sapiente velit voluptas ad.
        </p>
      </div>
    </div>
  );
}
export default SingleUser;
