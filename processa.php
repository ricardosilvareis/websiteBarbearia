<?php

include_once("conexao.php");

$nome = filter_input (INPUT_POST, 'nome', FILTER_SANITIZE_EMAIL);
$sobrenome = filter_input (INPUT_POST, 'sobrenome', FILTER_SANITIZE_STRING);
$cidade = filter_input (INPUT_POST, 'cidade', FILTER_SANITIZE_STRING);
$estado = filter_input (INPUT_POST, 'estado', FILTER_SANITIZE_STRING);
$cep = filter_input (INPUT_POST, 'cep', FILTER_SANITIZE_STRING);
$texto = filter_input (INPUT_POST, 'text', FILTER_SANITIZE_STRING);


$result_user = "INSERT INTO usuarios (nome, sobrenome, cidade, estado, cep, texto) VALUES ('$nome', '$sobrenome','$cidade', '$estado', '$cep', '$texto')";

$resultado_usuario = mysqli_query($conn, $result_user);

