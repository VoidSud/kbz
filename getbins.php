<?php
$bins = array_filter(glob('Bins/*'), 'is_dir'); // Get only directories in the Bins folder
$binNames = array_map('basename', $bins); // Extract directory names

header('Content-Type: application/json');
echo json_encode($binNames);
?>
