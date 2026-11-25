<?php
header("Content-Type:application/json;charset=UTF-8");

echo json_encode([
    "success" => true,
    "message" => "PHPとの接続に成功しました。"
], JSON_UNESCAPED_UNICODE);
