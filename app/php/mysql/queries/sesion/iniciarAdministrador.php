<?php
require '../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);
  $sesion = $body['datas'];

  $retorno = Consultas::IniciarAdministrador($sesion['Usuario']);
  if($retorno !== NULL){
    $estado = '0';
    $mensaje = 'No se encontro al administrador';

    if(password_verify($sesion['Clave'], $retorno['CLV'])){
      $estado = '1';
      $mensaje = $retorno;
    }

    print json_encode(
      array(
        'estado' => $estado,
        'mensaje' => $mensaje
      )
    );
  }else{
    print json_encode(
      array(
        'estado' => '0',
        'mensaje' => 'No se encontro al administrador'
      )
    );
  }
}

?>
