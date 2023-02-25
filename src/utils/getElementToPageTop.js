// 递归将所有的offsetTop加起来 获得dom元素到页面顶部的距离
function getElementToPageTop(el) {
    if (el.parentElement) {
        return getElementToPageTop(el.parentElement) + el.offsetTop
    }
    return el.offsetTop
}

export default getElementToPageTop