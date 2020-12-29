<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController extends Controller
{
    /**
     * Returns all records.
     */
    public function index(): AnonymousResourceCollection
    {
        return PostResource::collection(Post::paginate());
    }

    /**
     * Returns specified record.
     */
    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    /**
     * Creates a new record.
     */
    public function store(Request $request): PostResource
    {
        $post = new Post();
        $post->user_id = $request->user()->id;
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return new PostResource($post);
    }

    /**
     * Updates a specified record.
     *
     * @throws AuthorizationException
     */
    public function update(Request $request, Post $post): PostResource
    {
        $this->authorize('update', $post);

        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->save();

        return new PostResource($post);
    }

    /**
     * Deletes a specified record.
     *
     * @throws AuthorizationException
     */
    public function destroy(Post $post): JsonResponse
    {
        $this->authorize('delete', $post);

        $post->delete();

        return response()->json(null, 204);
    }
}
