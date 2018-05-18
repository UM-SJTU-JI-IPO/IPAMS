<?php


    function isAdmin($user)
    {
        $adminGroup = array("faculty", "admin");
        if (in_array($user->userType, $adminGroup)) {
            return true;
        } else {
            return false;
        }
    }