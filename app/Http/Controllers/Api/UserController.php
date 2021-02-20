<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController
{
    /**
     * Returns all records.
     */
    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::paginate(User::DEFAULT_PER_PAGE));
    }

    /**
     * Returns specified record.
     */
    public function show(User $user): UserResource
    {
        return new UserResource($user);
    }

    /**
     * Creates a new record.
     */
    public function store(Request $request): UserResource
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $user = new User();
        $user->email = $request->input('email');
        $user->name = $request->input('name');
        $user->save();

        if ($request->has('roles')) {
            $user->assignRole($request->input('roles'));
        }

        $user->with('roles')->first();

        return new UserResource($user);
    }

    /**
     * Updates a specified record.
     */
    public function update(Request $request, User $user): UserResource
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $user->name = $request->input('name');
        $user->email = $request->input('email');

        if ($request->has('password') && !empty($request->input('password'))) {
            $user->password = Hash::make($request->input('password'));
        }

        $user->save();

        if ($request->has('roles')) {
            $user->assignRole($request->input('roles'));
        }

        return new UserResource($user);
    }

    /**
     * Deletes a specified record.
     *
     * @throws \Exception
     */
    public function destroy(User $user): JsonResponse
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
