import { toValue, reactive, toRefs } from 'vue';

interface State<T> {
  isLoading: boolean;
  data: T | null;
  errorMsg: string | null;
}

const useFetch = async <T>(url: string) => {
  const state = reactive<State<T>>({
    isLoading: true,
    data: null,
    errorMsg: null,
  });

  const fetchData = async () => {
    state.isLoading = true;

    try {
      const response = await fetch(toValue(url));
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
