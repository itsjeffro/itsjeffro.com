<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController
{
    public function index()
    {
        return Role::paginate();
    }

    public function store(Request $request)
    {
        $role = new Role();
        $role->fill($request->all());
        $role->save();

        return $role;
    }

    public function show(Role $role)
    {
        return $role;
    }

    public function update(Request $request, Role $role)
    {
        $role->fill($request->all());
        $role->save();

        return $role;
    }

    /**
     * @throws \Exception
     */
    public function destroy(Role $role)
    {
        $role->delete();

        return response()->json(null);
    }
}
