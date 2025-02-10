import {Hero, Categories} from '../components/homepage/index';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between space-y-10 bg-white text-black dark:bg-gray-900 dark:text-white">
      <Hero />
      <Categories />  
    </div>
  );
}
