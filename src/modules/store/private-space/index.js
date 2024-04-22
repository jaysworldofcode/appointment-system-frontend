export default {
    namespaced: true,
    state: {
        private_space: [
            {
                title: 'My secret video',
                caption: 'This is my super secret video no one ever seen',
                type: 'video',
                date_added: '12/21/2024'
            },
            {
                title: 'My baby pictures',
                caption: 'This is my super secret video no one ever seen',
                type: 'video',
                date_added: '12/21/2024'
            },
        ]
    },
    getters: {
        GET_PRIVATE_SPACE: state => state.private_space,
    },
    actions: {
    },
    mutations: {
    }
}