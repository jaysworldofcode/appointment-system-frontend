export default {
    namespaced: true,
    state: {
        sidebar_visibility: false,
        form_modal_placement: 'right',
        user_details: {}
    },
    getters: {
        GET_SIDEBAR_VISIBILITY: state => state.sidebar_visibility,
        GET_FORM_MODAL_PLACEMENT: state => state.form_modal_placement,
        GET_USER_DETAILS: state => state.user_details,
    },
    actions: {
    },
    mutations: {
        SET_SIDEBAR_VISIBILITY(state, status) {
            state.sidebar_visibility = status;
        },
        SET_USER_DETAILS(state, data) {
            state.user_details = data;
        },
    }
}