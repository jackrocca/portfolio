<?php
header('Content-Type: application/json');

$directory = 'dist/assets/photos/2024/san-francisco/';
$images = glob($directory . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);

$imageData = array_map(function($image) {
    return [
        'src' => $image,
        'alt' => pathinfo($image, PATHINFO_FILENAME)
    ];
}, $images);

echo json_encode($imageData);
