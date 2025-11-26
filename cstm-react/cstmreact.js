// // function renderreact(reactElement , container){
// //     const domElement = document.createElement(reactElement.type)
// //     domElement.innerHTML = reactElement.children
// //     domElement.setAttribute('href',reactElement.props.href)
// //     domElement.setAttribute('target',reactElement.props.target)
// //     container.appendChild(domElement);
// // }


// function renderreact(reactElement , container){
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// for(const prop in reactElement.props){
//     if(prop === 'children') continue ;
//     domElement.setAttribute(prop , reactElement.props [prop])
// }
//     container.appendChild(domElement);
// }

// const reactElement={
//     type :'a',
//     props:{
//         href : 'https://google.com',
//         target : '_blank',
//     }    ,
//     children: 'click me to visit google'
// }
// const maincontainer = document.getElementById('root');

// renderreact(reactElement , maincontainer)

function callback(a,b){
    setTimeout(()=>{
        const ul = document.getElementsByClassName("print")[0]
        const li = document.createElement('li')
        li.innerText =a 
        ul.appendChild(li)
        console.log(a);
           if(b){
            b()
            }
    },1000)

    }
callback(1,()=>{
    callback(2,()=>{
        callback(3,()=>{
            callback(4,()=>{
                callback(5,()=>{
                     callback(6,()=>{
                         callback(7,()=>{
                             callback(8,()=>{
                                 callback(9,()=>{
                                     callback(10,()=>{
                                         callback(11,()=>{
                                             callback(12,()=>{
                                                 callback(13,()=>{
                                                     callback(14,()=>{
                                                         callback(15,()=>{
                                                             callback(16,()=>{
                                                                callback(17)
                                                             })
                                                         })
                                                     })
                                                 })
                                             })
                                         })
                                     })
                                 })
                             })
                         })
                     })
                })
            })
        })
    })
})
// Task A Random nm 32 print it for a 4 times in sequence
function random(a, b) {
    setTimeout(() => {
        const ul = document.getElementsByClassName('print')[0];
        const li = document.createElement('li');
        let random = Math.floor(Math.random() * 100)
        a += random
        li.innerText = a
        ul.appendChild(li)
        if (b) b();
    }, 1000);
}
random("Task A Random :", () => {
    random("Task B Random :", () => {
        random("Task C Random :",()=>{
            random("Task D Random :", ()=>{
                random("Task E Random :")
            } )
        })
    })
})
