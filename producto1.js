url='http://127.0.0.1:5500/productos'
fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)  // dataes un array con todos los productos de la api
            cad=``
            for (item of data ){
                cad=cad+ `
                <tr class="">
                    <td scope="row">${item.id}</td>
                    <td>${item.nombre} </td>
                    <td>${item.stock} </td>
                    <td>${item.precio} </td>
                    <td>
                        <img  width="100" src=${item.imagen}    alt=${item.nombre}   >
                    </td>
                    <td>    
                    </td>
                </tr>
                 `
            }
            console.log(cad)
            document.querySelector("tbody").innerHTML=cad       
          }
        )
        .catch(error => {
          console.log("Error:" + error)
         
        });
