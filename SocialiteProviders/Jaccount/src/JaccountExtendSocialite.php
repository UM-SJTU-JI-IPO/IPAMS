<?php

namespace SocialiteProviders\Jaccount;

use SocialiteProviders\Manager\SocialiteWasCalled;

class JaccountExtendSocialite
{
    /**
     * Execute the provider.
     */
    public function handle(SocialiteWasCalled $socialiteWasCalled)
    {
        $socialiteWasCalled->extendSocialite('jaccount', __NAMESPACE__.'\Provider');
    }
}
