// offset原生实现
function offset(target) {
    var top = 0,
        left = 0

    while(target.offsetParent) {
        top += target.offsetTop
        left += target.offsetLeft
        target = target.offsetParent
    }

    return {
        top: top,
        left: left,
    }
}

// position原生实现
function position(target) {
    return {
        top: target.offsetTop,
        left: target.offsetLeft,
    }
}

// 递归将所有的offsetTop加起来 获得dom元素到页面顶部的距离
function getElementToPageTop(el) {
    if (el.parentElement) {
        return getElementToPageTop(el.parentElement) + el.offsetTop
    }
    return el.offsetTop
}

export default {
    offset,
    position,
    getElementToPageTop
}