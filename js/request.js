//添加一个请求拦截器

axios.interceptors.request.use(function (config) {
    config.headers.common['Authorization'] = "Bearer "+getToken();
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function(response) {
        /**
         * code为非200是抛错 可结合自己业务进行修改
         */
        const res = response.data
        if (res.code !== 200) {
            // 401:未登录;
            if (res.code === 401 || res.code === 403) {
                location.href = "../login.html";
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    function(error) {
        var exjson = err.responseJson;
		alert(exjson.message);
        //location.href = "../login.html";
        return Promise.reject(error)
    }
)