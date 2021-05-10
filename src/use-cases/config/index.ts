import axios from 'axios'
import { host } from '../../entities/Host'

const HOST = host.local

export const api = axios.create({
    baseURL: HOST
})
