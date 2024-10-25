<?php
$userInput = $_POST["size"];
$size = (int) $userInput;

$matrix = [];

for ($i = 0; $i < $size + 1; $i++) {
    $matrix[$i] = [];
    for ($j = 0; $j < $size + 1; $j++){
        if ($i == 0 && $j == 0){
            continue;
        }elseif ($i == 0){
            $matrix[$i][$j] = $j;
        }elseif ($j == 0){
            $matrix[$i][$j] = $i;
        }else{
            $matrix[$i][$j] = $i * $j;
        }
    }
}

echo "<table border='1'>";
for ($i = 0; $i < $size + 1; $i++) {
    echo "<tr>";
    for ($j = 0; $j < $size + 1; $j++){
        echo "<td>" . $matrix[$i][$j] . "</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>
