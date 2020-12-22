<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;

abstract class BaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if (strtolower(App::Environment()) === 'production') {
            $this->runProduction();
        } else {
            $this->runTest();
        }
    }

    abstract public function runTest(): void;

    abstract public function runProduction(): void;
}
