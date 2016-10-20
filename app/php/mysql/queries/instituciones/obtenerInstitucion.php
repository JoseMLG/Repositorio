<?php
require '../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);
  $institucion = $body['data'];

  $retorno = Consultas::obtenerInstitucion($institucion);

  if($retorno !== NULL){
    $retorno2 = Consultas::ListarColecciones($retorno['CLVINS']);
    if($retorno2 !== NULL){
      $Colecciones = array();
      foreach ($retorno2 as $coleccion) {
        if($coleccion['NOMPAD'] != NULL){
          continue;
        }
        $coleccion['HIJOS'] = array();
        $tam2 = count($retorno2);
        for($j = 0; $j < $tam2; $j++){
          if($retorno2[$j]['NOMPAD'] == $coleccion['COLCLV']){
            $coleccion['HIJOS'][] = $retorno2[$j];
          }
        }
        $Colecciones[] = $coleccion;
      }
      $retorno['COLECCIONES'] = $Colecciones;
    }else{
      $retorno['COLECCIONES'] = array();
    }

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
        'mensaje' => 'No se pudo obtener la institucion'
      )
    );
}
}

?>
