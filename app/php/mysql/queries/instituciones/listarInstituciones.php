<?php
require '../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);
  $correo = $body['datas'];
  $correo = $body['user'];

  $retorno = Consultas::RegistrarCorreoInstitucional($correo['ClaveInstitucion'], $correo['Formato'], $correo['Tipo'],
              $user['ID']);

  if($retorno !== NULL){
    print json_encode(
      array(
        'estado' => '1',
        'mensaje' => $retorno
      )
    );
  }else{
    print json_encode(
      array(
        'estado' => '0',
        'mensaje' => 'No se encontraron instituciones'
      )
    );
}
}

?>
