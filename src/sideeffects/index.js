/**
 * Some kind of saga folder :/
 */

/**
 * Get profiles data
 *
 * @param page - Page to fetch
 * @param data - data which should be combined with new one
 * @returns {Promise<*[]>}
 */
export const fetchData = async (page, data) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const jsonResponse = await response.json();
    if (page > jsonResponse.total_pages) return;

    return data
      ? [...data, ...jsonResponse.data] // In order to keep data immutable I'm using spreading
      : jsonResponse.data;
};

/**
 * Get user data
 *
 * @returns {Promise<void>}
 */
export const fetchUser = async () => {
  const response = await fetch(`https://reqres.in/api/users/4`);
  const jsonResponse = await response.json();
  const { data } = jsonResponse;

  return data;
};
