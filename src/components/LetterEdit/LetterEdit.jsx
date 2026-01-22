import { useParams, Link } from 'react-router';

const LetterEdit = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>View/Edit Letter</h1>
      <p>Letter ID: {id}</p>
      <p>Letter view/edit coming soon...</p>
      <Link to='/'>Back to Dashboard</Link>
    </main>
  );
};

export default LetterEdit;
