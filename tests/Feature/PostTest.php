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
            ->json('post', '/admin/posts', [
                'title' => 'POST_TITLE',
                'content' => 'POST_CONTENT',
            ]);

        $jsonResponse
            ->assertStatus(201)
            ->assertJson([
                'data' => [
                    'title' => 'POST_TITLE',
                    'content' => 'POST_CONTENT',
                    'user_id' => $user->id,
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
            ->json('put', "/admin/posts/$post->id", [
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
            ->json('delete', "/admin/posts/$post->id");

        $jsonResponse->assertStatus(204);
    }

    public function test_get_post_successfully()
    {
        $user = factory(User::class)->create();

        $post = factory(Post::class)->create([
            'user_id' => $user->id,
        ]);

        $jsonResponse = $this->actingAs($user)
            ->json('get', "/admin/posts/$post->id");

        $jsonResponse
            ->assertStatus(200)
            ->assertJson([
                'data' => [
                    'title' => $post->title,
                    'content' => $post->content,
                    'user_id' => $user->id,
                ]
            ]);
    }
}
