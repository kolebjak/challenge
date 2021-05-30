import { Either, Left, Right } from './either'

export const getJSON = async <TData>(url: string): Promise<Either<string, TData>> => {
  try {
    const response = await fetch(url);
    if(response.ok) {
      const json = await response.json();
      return Right(json);
    }

    return Left(response.statusText || 'Failed to GET');
  } catch (e) {
    return Left(e.message);
  }
}

export const postJSON = async <TData, TPayload>(url: string, payload: TPayload): Promise<Either<string, TData>> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { ContentType: 'application/json' },
      body: JSON.stringify(payload),
    });

    if(response.ok) {
      const json = await response.json();
      return Right(json);
    }

    return Left(response.statusText || 'Failed to POST');
  } catch (e) {
    return Left(e.message);
  }
}
