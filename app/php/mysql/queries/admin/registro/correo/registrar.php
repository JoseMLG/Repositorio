<?php
require '../../../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);
  $correo = $body['datas'];
  $correo = $body['user'];

  $retorno = Consultas::RegistrarCorreoInstitucional($correo['ClaveInstitucion'], $correo['Formato'], $correo['Tipo'],
              $user['ID']);

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
        'mensaje' => 'No se pudo registrar el correo'
      )
    );
}
}

?>
