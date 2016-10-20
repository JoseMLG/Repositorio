<?php
require '../../connection/consultas.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $body = json_decode(file_get_contents("php://input"), true);

  $retorno = Consultas::ListarInstituciones();
  if($retorno !== NULL){
    $tam = count($retorno);
    for($i = 0; $i < $tam; $i++){
      $retorno2 = Consultas::ListarColecciones($retorno[$i]['CLVINS']);
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
        $retorno[$i]['COLECCIONES'] = $Colecciones;
      }else{
        $retorno[$i]['COLECCIONES'] = array();
      }
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
        'mensaje' => 'No se encontraron instituciones'
      )
    );
}
}

?>
