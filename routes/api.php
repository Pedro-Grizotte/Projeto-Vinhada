<?php

use App\Http\Controllers\Api\EventoController;
use Illuminate\Support\Facades\Route;

Route::get('/eventos', [EventoController::class, 'index']);