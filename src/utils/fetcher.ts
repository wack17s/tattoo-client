export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  try {
    const res = await fetch(input, init);

    const data = await res.json();

    if (data.statusCode && data.message) {
      throw `${input} error:  ${data.message}`;
    }

    return data;
  } catch (err) {
    throw err;
  }
}