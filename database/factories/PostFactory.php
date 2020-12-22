<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $sentence = $faker->sentence(rand(2,5));

    return [
        'title' => substr($sentence, 0, strlen($sentence) - 1),
        'content' => $faker->paragraph(rand(5, 30)),
    ];
});
