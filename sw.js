console.log('SW Hola mundo !!');

self.addEventListener('activate',(event)=>{
    console.log("Sw: activado");
})

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);

    if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: white;
                background-color: #3c2348;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }
    if(event.request.url.includes('.jpg')){
        let res = fetch('./images/desayuno3.jpg')
        event.respondWith(res)
    }

})