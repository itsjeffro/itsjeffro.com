<?php

namespace App\Services;

use App\Models\Post;
use Illuminate\Support\Str;

class PostService
{
    public function create(array $postData): Post
    {
        $post = new Post();
        $post->user_id = $postData['user_id'] ?? '';
        $post->title = $postData['title'] ?? '';
        $post->slug = Str::slug($this->getSlug($postData));
        $post->content = $postData['content'] ?? '';
        $post->published_at = new \DateTime();

        $post->save();

        return $post;
    }

    public function update(Post $post, array $postData): Post
    {
        $post->title = $postData['title'] ?? '';
        $post->slug = Str::slug($this->getSlug($postData));
        $post->content = $postData['content'] ?? '';

        $post->save();

        return $post;
    }

    private function getSlug(array $postData): string
    {
        if (!isset($postData['slug']) || empty($postData['slug'])) {
            return $postData['title'] ?? '';
        }

        return $postData['slug'];
    }
}
