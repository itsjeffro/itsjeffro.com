<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController
{
    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::paginate(User::DEFAULT_PER_PAGE));
    }

    public function show(User $user): UserResource
    {
        return new UserResource($user);
    }

    public function store(Request $request): UserResource
    {
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

    public function update(Request $request, User $user): UserResource
    {
        $user->fill($request->all());
        $user->save();

        if ($request->has('roles')) {
            $user->assignRole($request->input('roles'));
        }

        return new UserResource($user);
    }

    public function destroy(User $user): JsonResponse
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
