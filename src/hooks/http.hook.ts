// const water:Pick<Skills, 'water'> = {
//   water:'54'
// }
//
// const sk:Omit<Skills, 'all'>={
//
// }

//  Parameters

export const useHttp = () => {

  const request = async (
      url: string,
      method:string = 'GET',

      headers: Record<string,string> = {'Content-Type': 'application/json'},
      body:string | null = null
      ) =>
      {
    try {
      const response = await fetch(url, {method, headers, body});

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      return await response.json();
    } catch(e) {
      throw e;
    }
  };

  return {request}
}