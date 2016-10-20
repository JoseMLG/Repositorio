<?php
require '../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);
  $sesion = $body['datas'];

  $retorno = Consultas::IniciarUsuario($sesion['Usuario']);
  if($retorno !== NULL){
    $estado = '0';
    $mensaje = 'No se encontro al usuario';

    if(password_verify($sesion['Clave'], $retorno['CLACUSU'])){
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
        'mensaje' => 'No se encontro al usuario.'
      )
    );
  }
}

?>
