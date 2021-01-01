<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /** @var PostService */
    private $postService;

    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }

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
        $post = $this->postService
            ->create([
                'user_id' => $request->user()->id,
                'title' => $request->input('title'),
                'slug' => $request->input('slug'),
                'content' => $request->input('content'),
            ]);

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

        $post = $this->postService
            ->update($post, [
                'title' => $request->input('title'),
                'slug' => $request->input('slug'),
                'content' => $request->input('content'),
            ]);

        return new PostResource($post);
    }

    /**
     * Deletes a specified record.
     *
     * @throws AuthorizationException|\Exception
     */
    public function destroy(Post $post): JsonResponse
    {
        $this->authorize('delete', $post);

        $post->delete();

        return response()->json(null, 204);
    }
}
