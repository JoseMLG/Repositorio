<?php
  require 'database.php';

  class Consultas
  {
    function __construct(){ }

    //ADMINISTRACIÓN

    //Iniciar Administrador
    public static function IniciarAdministrador($Usuario){
      $consulta = "CALL IniciarAdministrador(?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($Usuario));
        if($comando->rowCount() > 0){
          return $row = $comando->fetch(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }

    //Crear Institucion
    public static function RegistrarInstitucion($Clave, $Nombre, $Direccion, $Logo, $Telefono, $Correo){
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

    //Asignar administrador en institucion
    public static function RegistrarAdministrador($Nombre, $Usuario, $Clave, $Institucion){
      $consulta = "CALL RegistrarAdministrador(?, ?, ?, ?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($Nombre, $Usuario, $Clave, $Institucion));
        if($comando->rowCount() > 0){
          return $row = $comando->fetch(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }

    //Asignar correo institucional a la institucion
    public static function RegistrarCorreoInstitucional($Institucion, $Formato, $Tipo, $Administrador){
      $consulta = "CALL RegistrarCorreoInstitucional(?, ?, ?, ?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($Institucion, $Formato, $Tipo, $Administrador));
        if($comando->rowCount() > 0){
          return $row = $comando->fetch(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }

    //instituciones
    public static function ListarInstituciones(){
      $consulta = "CALL ListarInstituciones()";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute();
        if($comando->rowCount() > 0){
          return $row = $comando->fetchAll(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }

    public static function ObtenerInstitucion($institucion){
      $consulta = "CALL ObtenerInstitucion(?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($institucion));
        if($comando->rowCount() > 0){
          return $row = $comando->fetch(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }

    //Colecciones
    public static function ListarColecciones($Institucion){
      $consulta = "CALL ListarColecciones(?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($Institucion));
        if($comando->rowCount() > 0){
          return $row = $comando->fetchAll(PDO::FETCH_ASSOC);
        }else{
          return NULL;
        }
      } catch (PDOException $e) {
        return NULL;
      }
    }

    //Iniciar Usuario
    public static function IniciarUsuario($Usuario){
      $consulta = "CALL IniciarUsuario(?)";
      try {
        $comando = Database::getInstance()->getDb()->prepare($consulta);
        $comando->execute(array($Usuario));
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
