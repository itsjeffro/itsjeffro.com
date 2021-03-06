<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_create_user_successfully()
    {
        $user = factory(User::class)->create();

        $jsonResponse = $this->actingAs($user)
            ->json('post', '/api/users', [
                'email' => 'demo@demo.com',
                'name' => 'DEMO_NAME',
            ]);

        $jsonResponse
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'name' => 'DEMO_NAME',
                ]
            ]);
    }

    public function test_update_user_successfully()
    {
        $user = factory(User::class)->create();

        $jsonResponse = $this->actingAs($user)
            ->json('put', "/api/users/$user->id", [
                'email' => 'updated@demo.com',
                'name' => 'UPDATED_NAME'
            ]);

        $jsonResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'email' => 'updated@demo.com',
                    'name' => 'UPDATED_NAME',
                ]
            ]);
    }

    public function test_get_user_successfully()
    {
        $user = factory(User::class)->create([
            'name' => 'DEMO_NAME',
        ]);

        $jsonResponse = $this->actingAs($user)
            ->json('get', "/api/users/$user->id");

        $jsonResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'name' => 'DEMO_NAME',
                ]
            ]);
    }

    public function test_delete_user_successfully()
    {
        $user = factory(User::class)->create();

        $jsonResponse = $this->actingAs($user)
            ->json('delete', "/api/users/$user->id");

        $jsonResponse->assertStatus(204);
    }
}
