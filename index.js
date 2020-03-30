const styles = {
	borderWidth:["0px 0px 1px 0px", "1px 1px 1px 1px", "0"],
	backgroundColor:['none','#F4F4F4'],
	boxShadow: ['0px 10px 15px rgba(0, 0, 0, 0.1)', 'none'],
	height:['32px','40px']
}


let borderWidths = styles.borderWidth
let bg = styles.backgroundColor
let box = styles.boxShadow
let heights = styles.height




const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

let output = cartesian(borderWidths,bg,box, heights);
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