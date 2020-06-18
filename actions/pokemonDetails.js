/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchPokemonDetails = async (name) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/pokemon/${name}`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return {}
  }
}
