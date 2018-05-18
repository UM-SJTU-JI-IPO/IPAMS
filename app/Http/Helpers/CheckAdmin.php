<?php


    function isAdmin($user)
    {
        $adminGroup = array("faculty");
        if (in_array($user->userType, $adminGroup)) {
            return true;
        } else {
            return false;
        }
    }