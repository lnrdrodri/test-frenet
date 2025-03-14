import { ref } from 'vue';

export async function useFetch(url, options = {}) {
  const data = ref("teste");
  const error = ref(null);
  const loading = ref(true);

  try {
    const response = await fetch(url, options);
    data.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
  
  return { data, error, loading };
}
