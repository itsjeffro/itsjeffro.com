<?php

namespace Tests\Feature;

use App\Models\Post;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    public function test_create_post_successfully()
    {
        $user = factory(User::class)->create();

        $jsonResponse = $this->actingAs($user)
            ->json('post', '/api/posts', [
                'title' => 'POST_TITLE',
                'content' => 'POST_CONTENT',
            ]);

        $jsonResponse
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'title' => 'POST_TITLE',
                    'content' => 'POST_CONTENT',
                    'author' => [
                        'id' => $user->id,
                    ],
                ]
            ]);
    }

    public function test_update_post_successfully()
    {
        $user = factory(User::class)->create();

        $post = factory(Post::class)->create([
            'user_id' => $user->id,
        ]);

        $jsonResponse = $this->actingAs($user)
            ->json('put', "/api/posts/$post->id", [
                'title' => 'UPDATED_TITLE',
                'content' => 'UPDATED_TITLE',
            ]);

        $jsonResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'title' => 'UPDATED_TITLE',
                    'content' => 'UPDATED_TITLE',
                ]
            ]);
    }

    public function test_delete_post_successfully()
    {
        $user = factory(User::class)->create();

        $post = factory(Post::class)->create([
            'user_id' => $user->id,
        ]);

        $jsonResponse = $this->actingAs($user)
            ->json('delete', "/api/posts/$post->id");

        $jsonResponse->assertStatus(204);
    }

    public function test_get_post_successfully()
    {
        $user = factory(User::class)->create();

        $post = factory(Post::class)->create([
            'user_id' => $user->id,
        ]);

        $jsonResponse = $this->actingAs($user)
            ->json('get', "/api/posts/$post->id");

        $jsonResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'title' => $post->title,
                    'content' => $post->content,
                    'author' => [
                        'id' => $user->id,
                    ],
                ]
            ]);
    }

    public function test_user_cannot_update_another_users_post()
    {
        $user = factory(User::class)->create();
        $author = factory(User::class)->create();

        $post = factory(Post::class)->create([
            'user_id' => $author->id,
        ]);

        $jsonResponse = $this->actingAs($user)
            ->json('put', "/api/posts/$post->id");

        $jsonResponse->assertStatus(403);
    }
}
