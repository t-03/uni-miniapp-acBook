import { axios } from "@/utils/xhr/request-v1";

/**
 * get 请求方式
 * @param url {String} 接口地址
 * @param params {Object} 接口参数
 * @returns {AxiosPromise}
 * @constructor
 */
export function mGet (url, params) {
  return axios({
    url: url,
    method: "get",
    params
  });
}

/**
 * post 请求方式
 * @param url {String} 接口地址
 * @param data {Object} 接口参数
 * @returns {AxiosPromise}
 * @constructor
 */
export function mPost (url, data) {
  return axios({
    url: url,
    method: "post",
    data
  });
}

/**
 * put 请求方式-用于修改全部数据
 * @param url {String} 接口地址
 * @param data {Object} 接口参数
 * @returns {AxiosPromise}
 * @constructor
 */
export function mPut (url, data) {
  return axios({
    url: url,
    method: "put",
    data
  });
}

/**
 * patch 请求方式-用于修改单项或多项数据
 * @param url {String} 接口地址
 * @param data {Object} 接口参数
 * @returns {AxiosPromise}
 * @constructor
 */
export function mPatch (url, data) {
  return axios({
    url: url,
    method: "patch",
    data
  });
}

/**
 * delete 请求方式
 * @param url {String} 接口地址
 * @param params {Object} 接口参数
 * @returns {AxiosPromise}
 */
export function mDelete (url, params) {
  return axios({
    url: url,
    method: "delete",
    params
  });
}

/**
 * 下载文件
 * @param url {String} 接口地址
 * @param params {Object} 接口参数
 * @returns {AxiosPromise}
 * @constructor
 */
export function mDownload (url, params) {
  return axios({
    url: url,
    method: "get",
    params,
    responseType: "blob"
  });
}

/**
 * 上传文件
 * @param url {String} 接口地址
 * @param data {Object} 接口参数
 * @returns {AxiosPromise}
 */
export function mUpload (url, data) {
  console.log(data);
  return axios({
    url: url,
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    timeout: 1000 * 60 * 4
  });
}
