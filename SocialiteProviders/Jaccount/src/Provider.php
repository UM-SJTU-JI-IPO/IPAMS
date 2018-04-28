<?php

namespace SocialiteProviders\Jaccount;

use Laravel\Socialite\Two\ProviderInterface;
use SocialiteProviders\Manager\OAuth2\AbstractProvider;
use SocialiteProviders\Manager\OAuth2\User;

class Provider extends AbstractProvider implements ProviderInterface
{
    /**
     * Unique Provider Identifier.
     */
    const IDENTIFIER = 'JACCOUNT';

    /**
     * {@inheritdoc}
     */
    protected $scopes = [''];

    /**
     * {@inheritdoc}
     */
    protected function getAuthUrl($state)
    {
        return $this->buildAuthUrlFromBase('https://jaccount.sjtu.edu.cn/oauth2/authorize', $state);
    }

    /**
     * {@inheritdoc}
     */
    protected function getTokenUrl()
    {
        return 'https://jaccount.sjtu.edu.cn/oauth2/token';
    }

    /**
     * {@inheritdoc}
     */
    protected function getUserByToken($token)
    {
        $response = $this->getHttpClient()->get('https://api.sjtu.edu.cn/v1/me/profile', [
            'headers' => [
                'Authorization' => 'Bearer '.$token,
            ],
        ]);

        $jset = json_decode($response->getBody(), true);
        return $jset['entities'][0];
    }

    /**
     * {@inheritdoc}
     */
    protected function mapUserToObject(array $user)
    {
        return (new User())->setRaw($user)->map([
            /* no need for this map
            'id'                => $user['id'],
            'account'           => $user['account'],
            'name'              => $user['name'],
            'studentID'         => $user['code'],
            'userType'          => $user['userType'],
            'birthday'          => $user['birthday'],
            'gender'            => $user['gender'],
            'email'             => $user['email'],
            'mobilePhone'       => $user['mobile'],
            'expireDate'        => $user['identities'][0]['expireDate'],
            'idCardType'        => $user['cardType'],
            'idCardNo'          => $user['cardNo'],
            */
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getTokenFields($code)
    {
        return array_merge(parent::getTokenFields($code), [
            'grant_type' => 'authorization_code'
        ]);
    }
}
