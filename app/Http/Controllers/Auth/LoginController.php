<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use InvalidArgumentException;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Login Controller
|--------------------------------------------------------------------------
|
| This controller handles authenticating users for the application and
| redirecting them to your home screen. The controller uses a trait
| to conveniently provide its functionality to your applications.
|
*/
class LoginController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Available providers.
     */
    public const PROVIDERS = [
        'google' => 'google',
    ];

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @param User $param
     * @return void
     */
    public function __construct(User $user)
    {
        $this->middleware('guest')->except('logout');

        $this->user = $user;
    }

    /**
     * Redirect the user to the provider authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider(string $provider)
    {
        $provider = self::PROVIDERS[$provider] ?? '';

        if (empty($provider)) {
            throw new InvalidArgumentException(sprintf('Socialite provider is not valid.', $provider));
        }

        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from provider.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback(string $provider)
    {
        $provider = self::PROVIDERS[$provider] ?? '';

        if (empty($provider)) {
            throw new InvalidArgumentException(sprintf('Socialite provider is not valid.', $provider));
        }

        $oauthUser = Socialite::driver($provider)->user();

        $user = $this->user->where('email', $oauthUser->getEmail())->first();

        if (!$user instanceof User) {
            $user = new User;
            $user->name = $oauthUser->getName();
            $user->email = $oauthUser->getEmail();
            $user->save();
        }

        if (Auth::login($user)) {
            return redirect()->route('home');
        }

        return redirect()->route('login');
    }
}
