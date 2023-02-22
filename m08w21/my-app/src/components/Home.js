import { useTheme } from '../contexts/useTheme';

function Home() {
  const { toggle } = useTheme();
  return (
    <div className={`p-5 text-center ${toggle && 'bg-dark text-light'}`}>
      <h2 className="display-3">Hello from Home!</h2>
    </div>
  );
}

export default Home;
