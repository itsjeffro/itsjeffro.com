<?php

use App\Models\Post;
use App\User;

class PostSeeder extends BaseSeeder
{
    /**
     * @return void
     */
    public function runTest(): void
    {
        $user = factory(User::class)->create();

        factory(Post::class, 20)->create([
            'user_id' => $user->id,
        ]);
    }

    /**
     * @return void
     */
    public function runProduction(): void
    {
        //
    }
}
