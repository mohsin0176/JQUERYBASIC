<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script type="text/javascript" src="jquery/jquery_latest.js"></script>
    <script type="text/javascript" src="jquery/ajax.js"></script>
    <link rel="stylesheet" type="text/css" href="css/ajax.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>JQUERY START</title>
  </head>
  <body>
    
    <div id="content">
      <?php
      $db=mysql_connect("localhost","root","");
      $query="SELECT *FROM product";
      $result=mysql_query($query);
      while ($row=mysql_fetch_array($result)) {?>

        <?php
        $count_query="SELECT *FROM ratings WHERE product_id=".$row[product_id].";
        $count_result=mysql_query($count_query);
        $totalRating=mysql_num_rows($count_result);

        $sql="SELECT AVG(rating) *FROM ratings WHERE product_id=".$row["product_id"].";

        $results=mysql_query($sql);

      while ($rows=mysql_fetch_array($results)) {?>

        <div class="header">
          <h3 class="title">
            <?php
            echo $row["title"];?></h3>
            <p class="p_id"></p><?php 
            echo "[Product Id'.$row["product_id"]."]";?></p>
        </div>
      
        <p> <?php echo $row["product_details"];?></p>

        <div class="ratings">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        </div>
        <span class="h_id">
        <?php echo $row["product_id"];?></span>
        <div class="avg_rate">
          <p>Average Rating:<?php
          echo floor($rows["AVG(rating)"])."(Total rating given".$totalRating.")";?></p>
        </div>
        <?php }?>
        <?php }?>
      </div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>