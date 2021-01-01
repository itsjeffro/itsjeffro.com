<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Post
 * @property integer $id
 * @property integer $user_id
 * @property string $title
 * @property string $slug
 * @property string $content
 * @property \DateTime $published_at
 */
class Post extends Model
{
    use SoftDeletes;

    /** @var int */
    const DRAFT_STATUS = 1;

    /**
     * Post belongs to user.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
