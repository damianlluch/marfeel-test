import DataView from './dataView.js';

var htmlView = document.querySelector('#root');

(async function () {
    const dataSet = await d3.json('/mock/mock3.json')

    dataSet.forEach((data) => {
        var el = document.createElement('div');
        el.classList.add('widget');
        htmlView.appendChild(el);
        let view = new DataView(el, data);
        view.render();
    })

})();
