<?php

namespace Tests\Feature;

use App\Models\Role;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserRoleTest extends TestCase
{
    use RefreshDatabase;

    public function test_create_user_with_role_successfully()
    {
        $this->seed();

        $user = factory(User::class)->create();

        $jsonResponse = $this->actingAs($user)
            ->json('post', '/admin/users', [
                'email' => 'demo@demo.com',
                'name' => 'DEMO_NAME',
                'roles' => [
                    Role::ADMIN_ROLE,
                ],
            ]);

        $jsonResponse
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'name' => 'DEMO_NAME',
                    'roles' => [
                        ['name' => Role::ADMIN_ROLE],
                    ],
                ],
            ]);
    }
}
