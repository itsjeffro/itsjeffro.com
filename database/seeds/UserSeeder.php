<?php

use App\Models\Role;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => Role::ADMIN_ROLE]);

        $user = new User();
        $user->name = 'Admin';
        $user->email = 'admin@demo.com';
        $user->email_verified_at = now();
        $user->password = Hash::make('changeme');
        $user->save();

        $user->assignRole(Role::ADMIN_ROLE);
    }
}
