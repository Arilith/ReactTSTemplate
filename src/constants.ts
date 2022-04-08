namespace constants {
    export const app_name = 'APP NAME HERE'

    export const is_development : boolean = !window.location.hostname.includes(app_name)
}

export default constants