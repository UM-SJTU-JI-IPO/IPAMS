<?php


    function isSelected($choice, $target, $output = 'selected')
    {
//        dd($choice == $target);
        if ($choice == $target) {
            return $output;
        }
    }
