<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('items', function () {
    $people = DB::select('SELECT * FROM items ORDER BY id ASC');
    return $people;
});

Route::post('items', function (Request $request) {
    DB::insert('INSERT INTO items (name, quantity, link) VALUES (?, ?, ?)', [$request->name, $request->quantity, $request->link]);
    $people = DB::select('SELECT * FROM people ORDER BY id ASC');
    return $people;
});

Route::delete('items/{id}', function ($id) {
    DB::delete('DELETE FROM items WHERE id = ?', [$id]);
    $people = DB::select('SELECT * FROM people ORDER BY id ASC');
    return $people;
});

Route::put('items/{id}', function (Request $request, $id) {
    DB::update('UPDATE items SET name=?, quantity=?, link=? WHERE id = ?', [$request->name, $request->quantity, $request->link, $id]);
    $people = DB::select('SELECT * FROM items ORDER BY id ASC');
    return $people;
});
