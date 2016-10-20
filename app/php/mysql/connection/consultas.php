<?php
  require 'database.php';

  class Consultas
  {
    function __construct(){ }

    //ADMINISTRACIÓN

    //Crear Institucion
    public static function CrearUsuario($Clave, $Nombre, $Direccion, $Logo, $Telefono, $Correo){
      $consulta = "CALL RegistrarInstitucion(?, ?, ?, ?, ?, ?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($Clave, $Nombre, $Direccion, $Logo, $Telefono, $Correo));
        if($comando->rowCount() > 0){
          return $row = $comando->fetch(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }
  }
?>
