import { toRefs, reactive } from 'vue';

interface State<T> {
  isLoading: boolean;
  data: T | null;
  errorMsg: string | null;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const useFetch = async <T>(url: string, method: HttpMethod = 'GET', body?: any) => {
  const state = reactive<State<T>>({
    isLoading: true,
    data: null,
    errorMsg: null,
  });

  const fetchData = async () => {
    state.isLoading = true;

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      state.data = await response.json();
    } catch (error: unknown) {
      const typerError = error as Error;
      state.errorMsg = typerError.message;
    } finally {
      state.isLoading = false;
    }
  };

  await fetchData();

  return { ...toRefs(state) };
};

export default useFetch;
