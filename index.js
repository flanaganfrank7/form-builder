const styles = {
	borderWidth:["0px 0px 1px 0px", "1px 1px 1px 1px", "0"],
    backgroundColor:['none','lightgrey']
}


let borderWidths = styles.borderWidth
let bg = styles.backgroundColor




const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

let output = cartesian(borderWidths, bg);
console.log(output)


new Vue({
	el:"#ffForms",
	data: {output}
	// methods:{
	// 	buttonClick: () => {
    //             alert('Thanks for stopping by 👋')
    //         }
	// }
})