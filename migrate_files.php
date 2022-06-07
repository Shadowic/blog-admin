<?php

try {
  $dsn = 'mysql:host=mysql;dbname=' . $_SERVER['DATABASE_NAME'];
  $db = new PDO(
    $dsn,
    $_SERVER['DATABASE_USER'],
    $_SERVER['DATABASE_PASSWORD']
  );


  $oldPrefix = 'https://shadowic-blog.s3.eu-north-1.amazonaws.com/';
  $newPrefix = 'https://33308.selcdn.ru/shadowic/';

  $updateStatement = $db->prepare('UPDATE files SET url = :url, formats=:formats WHERE id = :id AND formats IS NOT NULL');

  $stmt = $db->query("SELECT id, url, formats FROM files");
  while ($row = $stmt->fetch()) {
    var_dump('id:', $row['id']);
    $url = str_replace($oldPrefix, $newPrefix, $row['url']);

    $formats = str_replace($oldPrefix, $newPrefix, $row['formats']);
    $updateStatement->execute(['id' => $row['id'], 'url' => $url, 'formats' => $formats]);
  }

} catch (PDOException $e) {
  var_dump("Error!: " . $e->getMessage());
}
