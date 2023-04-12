import axios from 'axios'

import { getInstanceHeaders } from './helper'

const { REACT_APP_API_URL } = process.env

export const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: getInstanceHeaders()
})
