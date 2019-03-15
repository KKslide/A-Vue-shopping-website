export default function (Vue) {
    Vue.filter('date', (tplData) => {
        let date = new Date(tplData);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    });
}