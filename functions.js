/*La siguiente estructura se encarga de convertir los datos obtenidos
en texto plano para posteriormente poderlo convertir a XML */
function descargarArchivo(contenidoEnBlob, nombreArchivo)
{
    var reader = new FileReader();
    reader.onload = function (event)
    {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'archivo.dat';
        var clicEvent = new MouseEvent('click',
            {
            'view': window,
                'bubbles': true,
                'cancelable': true
            });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};


function obtenerDatos()
{
    return{
        control: document.getElementById('txtcontrol').value,
        nombre: document.getElementById('txtnombre').value,
        carrera: document.getElementById('txtcarrera').value,
        telefono: document.getElementById('txttelefono').value,
        direccion: document.getElementById('txtdireccion').value,
        nss: document.getElementById('txtnss').value,
        fecha: (new Date()).toLocaleDateString()

    };
};

function convertirXML(cadena)
{
    if (typeof cadena !=='string'){
        return '';
    };
    cadena = cadena.replace('&', '&amp')
    .replace('<','&lt')
    .replace('>','&gt')
    .replace('"','&quot');
    return cadena;
};


function generarXml(datos) {
    var texto = [];
    texto.push('<?ml version="1.0" encoding="UTF-8" ?>\n');
    texto.push('<datos>\n');
    texto.push('\t<control>');
    texto.push(convertirXML(datos.control));
    texto.push('<control>\n');
    texto.push('\t<nombre>');
    texto.push(convertirXML(datos.nombre));
    texto.push('<nombre>\n');
    texto.push('\t<carrera>');
    texto.push(convertirXML(datos.carrera));
    texto.push('<carrera>\n');
    texto.push('\t<telefono>');
    texto.push(convertirXML(datos.telefono));
    texto.push('</telefono>\n');
    texto.push('\t<direccion>');
    texto.push(convertirXML(datos.direccion));
    texto.push('</direccion>\n');
    texto.push('\t<nss>');
    texto.push(convertirXML(datos.nss));
    texto.push('</nss>\n');
    texto.push('\t<fecha>');
    texto.push(convertirXML(datos.fecha));
    texto.push('</fecha>\n');
    texto.push('<datos>\n');

    return new Blob(texto, {
        type: 'application/xml'
    });
};


document.getElementById('boton-xml').addEventListener('click', function(){
    var datos = obtenerDatos();
    descargarArchivo(generarXml(datos), 'archivo.xml');
}, false);



// Error de estilo: falta un punto y coma
const saludo = "Hola mundo"

// Error de sintaxis: función sin nombre
function () {
  console.log('Error');
}




