<?php


    function isAdmin($user)
    {
        $adminGroup = array("admin", "assistant");
        if (in_array($user->userType, $adminGroup)) {
            return true;
        } else {
            return false;
        }
    }