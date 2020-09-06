// Lol I wanted to use JSX but not react. Don't be like me.
var ATTR_MAP = {
    className: 'class',
    htmlFor: 'for'
};
export var Fragment = Symbol('Fragment');
export function appendChildren(parent, children) {
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        if (typeof child === 'string') {
            parent.appendChild(document.createTextNode(child));
        }
        else if (Array.isArray(child)) {
            appendChildren(parent, child);
        }
        else if (child != null) {
            parent.appendChild(child);
        }
    }
}
;
export function createElement(tag, props) {
    var _a;
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (tag === Fragment)
        return children;
    var elem = document.createElement(tag);
    if (props) {
        for (var _b = 0, _c = Object.keys(props); _b < _c.length; _b++) {
            var key = _c[_b];
            elem.setAttribute((_a = ATTR_MAP[key]) !== null && _a !== void 0 ? _a : key, String(props[key]));
        }
    }
    appendChildren(elem, children);
    return elem;
}
;
export function render(parent, child) {
    appendChildren(parent, [child]);
}
//# sourceMappingURL=analogDOM.js.map