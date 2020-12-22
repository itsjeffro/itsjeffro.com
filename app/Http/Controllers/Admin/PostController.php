<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController
{
    public function index(): AnonymousResourceCollection
    {
        return PostResource::collection(Post::paginate());
    }

    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    public function store(Request $request): PostResource
    {
        $post = new Post();
        $post->user_id = $request->user()->id;
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return new PostResource($post);
    }

    public function update(Request $request, Post $post): PostResource
    {
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return new PostResource($post);
    }

    public function destroy(Post $post): JsonResponse
    {
        $post->delete();

        return response()->json(null, 204);
    }
}
