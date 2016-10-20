<?php
require '../../../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);
  $administrador = $body['datas'];

  $retorno = Consultas::RegistrarAdministrador($administrador['Nombre'], $administrador['Usuario'],
  $administrador['Clave'], $administrador['ClaveInstitucion']);

  if($retorno !== NULL){
    print json_encode(
      array(
        'estado' => $retorno['estado'],
        'mensaje' => $retorno['mensaje']
      )
    );
  }else{
    print json_encode(
      array(
        'estado' => '0',
        'mensaje' => 'No se pudo registrar la institucion'
      )
    );
}
}

?>
