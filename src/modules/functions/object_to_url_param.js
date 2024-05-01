export default (data) => {
    if(data){
        return Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&')
    }

    return ''
}