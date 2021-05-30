import { useEffect, useState } from 'react'
import { getJSON } from './fetcher'
import { Either } from './either'

export interface IUser {
  id: number;
  name: string;
}

const useUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Either<string, IUser[]>>();

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      setResult(undefined);

      const response = await getJSON<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setResult(response)
      setIsLoading(false);
    }

    loadUsers();
  }, []);

  return { isLoading, result }
}

export default useUsers;
