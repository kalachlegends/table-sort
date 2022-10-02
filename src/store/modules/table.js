import axios from "axios"
import store from ".."
export default {
    state: {
        page: 1,
        curretKeySearch: "title",
        table: [],
        totalPage: 10,
        limit: 15,

    },
    getters: {
        allTables(state) {
            return state.table
        },
        page(state) {
            return state.page
        },
        limit(state) {
            return state.limit
        },
        totalPage(state, getters) {

            return state.totalPage
        },
        sortTableAndSearch: (state, getters) => (searchQuery, sort) => {
            const { table, curretKeySearch } = state
            function sortNumbers(a, b) {
                if (a[curretKeySearch] > b[curretKeySearch])
                    return 1;
                else if (b[curretKeySearch] > a[curretKeySearch])
                    return -1;
                else
                    return 0;


            }
            function sortNumbersMin(a, b) {
                if (a[curretKeySearch] < b[curretKeySearch])
                    return 1;
                else if (b[curretKeySearch] < a[curretKeySearch])
                    return -1;
                else
                    return 0;
            }
            function equally(a, b) {
                if (a[curretKeySearch] == b[curretKeySearch])
                    return 1;
                else if (b[curretKeySearch] == a[curretKeySearch])
                    return -1;
                else
                    return 0;
            }




            if (sort == "more")
                return getters.searchQueryTable(searchQuery).sort(sortNumbers)
            if (sort == "less")
                return getters.searchQueryTable(searchQuery).sort(sortNumbersMin)
            if (sort == "equally")
                return getters.searchQueryTable(searchQuery, sort).sort(equally)
            if (sort == "contains")
                return getters.searchQueryTable(searchQuery)

        },
        searchQueryTable: (state, getters) => (searchQuery, sort) => {
            const { table, curretKeySearch } = state
            if (sort) {
                const regex = new RegExp(`^${searchQuery}`)
                return table.filter(table => regex.test(table[curretKeySearch].toString()))

            }

            return table.filter(table => table[curretKeySearch].toString().toLowerCase().includes(searchQuery.toLowerCase()))

        },
    },
    mutations: {
        updateTable(state, table) {
            state.table = table
        },

        updatePage(state, page) {
            state.page = page
        },
        updateTotalPage(state, totalpage) {
            state.totalPage = totalpage
        },
        updateCurretKeySearch(state, curretKeySearch) {
            state.curretKeySearch = curretKeySearch
        }
    },
    actions: {
        async fetchTable(ctx) {
            const { page, limit } = ctx.state

            const response = await axios.get('http://localhost:4444/api/tables', {
                params: {
                    page: page,
                    size: limit
                }
            })
            console.log(response)
            console.log(Math.ceil(response.headers["total_count"] / limit))
            ctx.commit('updateTable', response.data)
            ctx.commit('updateTotalPage', Math.ceil(response.headers["total_count"] / limit))

        }
    },
}