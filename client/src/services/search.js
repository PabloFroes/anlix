import Api from "./api"

const SearchService = { 

    name: (name) => Api.get(`/paciente/name/${name}`),
    getIndex: (name) => Api.get(`/paciente/index/name/${name}`)

}

export default SearchService